import { Link } from "react-router";
import Logo from "../logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navItems}>
          <div className="left">
            <Logo />
          </div>
          <div className="middle">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Shop</li>
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
