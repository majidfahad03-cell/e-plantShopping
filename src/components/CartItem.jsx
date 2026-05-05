import React from "react";

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: AED {item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => onIncrease(item.id)}>+</button>
      <button onClick={() => onDecrease(item.id)}>-</button>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
