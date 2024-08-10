import "./nav-css.css";
import { Link, useNavigate } from "react-router-dom";
import search from "../../assets/new-icons/search.png";
import wishlist from "../../assets/new-icons/wishlist.png";
import cart from "../../assets/new-icons/cart.png";
import user from "../../assets/new-icons/account.png";
import Logo_Header from "../logo-header/Logo";
import { isAuthenticated } from '../../utils/auth.js'; // Import the utility function

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (isAuthenticated()) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="main-bar">
      <div className="nav-items">
        <div className="left">
          <Logo_Header />
        </div>
        <div className="middle">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shop</li>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="right">
          <img src={search} alt="search" width="20px" onClick={() => handleNavigation('/search')} />
          <img src={wishlist} alt="wishlist" width="20px" onClick={() => handleNavigation('/wishlist')} />
          <img src={cart} alt="cart" width="20px" onClick={() => handleNavigation('/cart')} />
          <img src={user} alt="user" width="20px" onClick={() => handleNavigation('/account')} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
