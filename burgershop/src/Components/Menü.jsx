import MenuItem from '../Components/MenuItem';
import React from 'react';
import { Data } from '../Helpers/Data';
import '../styles/Menu.css';

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
