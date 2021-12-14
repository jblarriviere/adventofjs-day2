import React from 'react';

import type { Item } from '../types';
import MenuItem from './MenuItem';

type MenuProps = {
    menuItems: Item[];
    addToCart: (item: Item) => void;
};

function Menu({ menuItems, addToCart }: MenuProps) {
  return (
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul className="menu">
        {menuItems.map(item => <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          image={item.image}
          alt={item.alt}
          count={item.count}
          addToCart={() => addToCart(item)} />
        )}
      </ul>
    </div>
  );
}

export default Menu;