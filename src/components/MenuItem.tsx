import React from "react";

import type { Item } from "../types";

type MenuItemProps = Item & {
  addToCart: () => void;
};

const MenuItem = ({name, image, alt, price, count, addToCart}: MenuItemProps) => {
  return(
    <li>
      <div className="plate">
        <img src={`images/${image}`} alt={alt} className="plate" />
      </div>
      <div className="content">
      <p className="menu-item">{name}</p>
      <p className="price">${price/100}</p>
      {count > 0 ? 
        <button className="in-cart">
        <img src="images/check.svg" alt="Check" />
        In Cart
        </button> 
        : 
        <button className="add" onClick={addToCart}>Add to Cart</button>
      }
      </div>
    </li>
  )
}

export default MenuItem;