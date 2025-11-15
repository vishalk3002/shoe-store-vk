import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "./Nav.css";

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        {/* Search Box */}
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            onChange={handleInputChange}
            value={query}
            placeholder="Search for shoes..."
          />
        </div>
      </div>

      {/* Icons */}
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons heart" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons cart" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons user" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
