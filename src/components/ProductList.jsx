import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const categories = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 25, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 30, image: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 3, name: "Peace Lily", price: 35, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Monstera", price: 50, image: "https://via.placeholder.com/100" }
  ],
  Succulents: [
    { id: 5, name: "Cactus", price: 15, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Succulent Mix", price: 20, image: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div>
      <h2>Our Plants</h2>

      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {categories[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>Price: AED {plant.price}</p>

              <button
                onClick={() => dispatch(addItem({ ...plant, quantity: 1 }))}
                disabled={isInCart(plant.id)}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
