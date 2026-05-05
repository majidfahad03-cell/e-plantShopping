import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 25, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 30, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 35, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Rose", price: 20, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Tulip", price: 22, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Sunflower", price: 28, category: "Outdoor", image: "https://via.placeholder.com/100" },
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>AED {plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
