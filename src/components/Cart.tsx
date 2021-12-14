import React from 'react';

import CartItem from './CartItem';

import type { Item } from '../types';

type CartProps = {
  cartItems: Item[];
  updateCount: (item: Item, update: number) => void;
};

const computeTax = (subtotal: number) => {
  return Math.round(subtotal * 0.0975 * 100) / 100;
}

const Cart = ({cartItems, updateCount} : CartProps) => {

  let emptyCart = cartItems.length === 0 ? <p className="empty">Your cart is empty.</p> : <></>;

  const subtotal = cartItems.reduce((sum, e) => sum + e.price * e.count/100, 0);
  const tax = computeTax(subtotal);
  const total = Math.round((subtotal+tax)*100) / 100;

  return(
    <div className="panel cart">
      <h1>Your Cart</h1>
      {emptyCart}
      <ul className="cart-summary">
        {cartItems.map(item => 
          <CartItem
            key={item.name}
            name={item.name} 
            price={item.price}
            image={item.image}
            alt={item.alt}
            count={item.count}
            updateCount={(update: number) => updateCount(item, update) }
          />)
        }
      </ul>
      <div className="totals">
        <div className="line-item">
          <div className="label">Subtotal:</div>
          <div className="amount price subtotal">${subtotal}</div>
        </div>
        <div className="line-item">
          <div className="label">Tax:</div>
          <div className="amount price tax">${tax}</div>
        </div>
        <div className="line-item total">
          <div className="label">Total:</div>
          <div className="amount price total">${total}</div>
        </div>
      </div>

    </div>
  );
}

export default Cart;