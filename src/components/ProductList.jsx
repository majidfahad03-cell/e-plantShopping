import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 25, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 30, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 35, image: "https://via.placeholder.com/100" },
  { id: 4, name: "Monstera", price: 50, image: "https://via.placeholder.com/100" },
  { id: 5, name: "Fern", price: 20, image: "https://via.placeholder.com/100" },
  { id: 6, name: "Cactus", price: 15, image: "https://via.placeholder.com/100" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.find(item => item.id === id);
  };

  return (
    <div>
      <h2>Our Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
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
  );
}

export default ProductList;
