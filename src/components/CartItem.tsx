import React from 'react';

import type { Item } from '../types';

type CartItemProps = Item & {
  updateCount: (update: number) => void;
};

const CartItem = ({name, price, image, alt, count, updateCount}: CartItemProps) => {
  return(
    <li>
      <div className="plate">
        <img src={`images/${image}`} alt={alt} className="plate" />
        <div className="quantity">{count}</div>
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">${price/100}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease"  onClick={() => updateCount(-1)}>
          <img src="images/chevron.svg" alt="decrease chevron"/>
        </button>
        <div className="quantity">{count}</div>
        <button className="increase" onClick={() => updateCount(1)}>
          <img src="images/chevron.svg" alt="increase chevron" />
        </button>
      </div>
      <div className="subtotal">
        {count*price / 100}
      </div>
    </li>
  );
}

export default CartItem;