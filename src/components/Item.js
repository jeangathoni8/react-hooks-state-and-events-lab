import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle item's cart status
  const toggleItemInCart = () => {
    setInCart(!inCart);
  };

  // Determine the button text based on item's cart status
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  // Determine the list item's class based on item's cart status
  const itemClass = inCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleItemInCart}>{buttonText}</button>
    </li>
  );
}

export default Item;

