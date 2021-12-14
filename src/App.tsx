import React, {useState} from 'react';
import './App.css';

import Menu from './components/Menu';
import Cart from './components/Cart';

import type {Item} from './types';

const menuItems : Item[] = [
  {
      name: 'French Fries with Ketchup',
      price: 223,
      image: 'plate__french-fries.png',
      alt: 'French Fries',
      count: 0,    
  },
  {
      name: 'Salmon and Vegetables',
      price: 512,
      image: 'plate__salmon-vegetables.png',
      alt: 'Salmon and Vegetables',
      count: 0,      
  },
  {
      name: 'Spaghetti Meat Sauce',
      price: 782,
      image: 'plate__spaghetti-meat-sauce.png',
      alt: 'Spaghetti with Meat Sauce',
      count: 0,    
  },
  {
      name: 'Bacon, Eggs, and Toast',
      price: 599,
      image: 'plate__bacon-eggs.png',
      alt: 'Bacon, Eggs, and Toast',
      count: 0,
  },
  {
      name: 'Chicken Salad with Parmesan',
      price: 698,
      image: 'plate__chicken-salad.png',
      alt: 'Chicken Salad with Parmesan',
      count: 0,
  },
  {
      name: 'Fish Sticks and Fries',
      price: 634,
      image: 'plate__fish-sticks-fries.png',
      alt: 'Fish Sticks and Fries',
      count: 0,
  }
]

function App() {

  const [items, setItems] = useState<Item[]>(menuItems);

  const addToCart = (item: Item) => {
    let index = items.findIndex(e => e.name === item.name);
    
    if(index > -1 && items[index].count === 0) {
      let newItems = [...items];
      newItems[index].count = 1;
      setItems(newItems);
    }
  }

  const updateCount = (item: Item, update: number) => {
    let index = items.findIndex(e => e.name === item.name);
    
    if(index > -1 && items[index].count + update >= 0) {
      let newItems = [...items];
      newItems[index].count = items[index].count + update;
      setItems(newItems);
    }
  }

  return (
    <div className="wrapper menu">
      <Menu menuItems={items} addToCart={addToCart} />
      <Cart cartItems={items.filter(e => e.count !== 0)} updateCount={updateCount}/>
    </div>
  );
}

export default App;
