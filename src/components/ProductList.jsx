import React from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 25 },
  { id: 2, name: "Snake Plant", price: 30 },
  { id: 3, name: "Peace Lily", price: 35 },
  { id: 4, name: "Monstera", price: 50 },
];

function ProductList() {
  return (
    <div>
      <h2>Our Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>Price: AED {plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
