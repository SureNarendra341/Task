import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { FaUser, FaUserPlus, FaSignOutAlt, FaShoppingCart } from "react-icons/fa";


function Navbar({ user, setUser, cartCount }) {
  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(SearchContext);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Amazon</Link>
      <input
        type="text"
        placeholder="Search products..."
        className="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="nav-icons">
        {user ? (
          <span onClick={handleLogout} title="Logout">
            <FaSignOutAlt size={20} />
          </span>
        ) : (
          <>
            <Link to="/login" title="Login"><FaUser size={20} /></Link>
            <Link to="/register" title="Register"><FaUserPlus size={20} /></Link>
          </>
        )}
        <Link to="/cart" title="Cart"><FaShoppingCart size={20} /> ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
