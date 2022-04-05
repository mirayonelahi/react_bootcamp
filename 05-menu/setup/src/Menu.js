import React from "react";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <div className="menu-item">
      <img src={img} className="photo" alt="" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <span className="price">23</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
