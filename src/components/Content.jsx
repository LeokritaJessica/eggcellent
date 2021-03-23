import React from "react";
import Egg1 from "../images/egg1.jpg";
import Egg2 from "../images/egg2.jpg";

const Content = () => {
  return (
    <>
    <div className="menu-card">
      <img src={Egg1} alt="egg" className="h-full rounded mb-20 shadow" />
      <div className="center-card">
        <h2 className="text-2xl mb-2">Egg Muffins</h2>
        <p className="mb-2">Crispy, delicious, and nutritious</p>
        <span>$16</span>
      </div>
    </div>

    <div className="menu-card">
      <img src={Egg2} alt="egg" className="h-full rounded mb-20 shadow" />
      <div className="center-card">
        <h2 className="text-2xl mb-2">Egg Sandwich</h2>
        <p className="mb-2">Creamy, delicious, and nutritious</p>
        <span>$20</span>
      </div>
      </div>
    </>
  );
};

export default Content;
