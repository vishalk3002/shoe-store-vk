import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange, onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState); // send state to App.jsx
  };

  return (
    <div className="main-layout">
      <div className="hamburger" onClick={toggleSidebar}>
        <FiMenu size={28} />
      </div>

      {isOpen && (
        <section className="sidebar">
          <div className="logo-container">
            <h1>Shoe Store</h1>
          </div>

          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </section>
      )}
    </div>
  );
};

export default Sidebar;
