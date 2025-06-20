import { Link } from "react-router";
import Logo from "../logo/Logo";
import styles from "./Navbar.module.css";
import icons from "../../../assets/icons/icons";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navItems}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.middle}>
            <ul className={styles.navList}>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  Home
                </Link>
              </li>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  Shop
                </Link>
              </li>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  Women
                </Link>
              </li>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  Men
                </Link>
              </li>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  Accessories
                </Link>
              </li>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  About Us
                </Link>
              </li>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  Contact Us
                </Link>
              </li>
              <li className={styles.navListItems}>
                <Link className={styles.link_deco} to="/">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <Link className={styles.link_deco} to="/">
              <img src={icons.search} width="20px" />
            </Link>
            <Link className={styles.link_deco} to="/">
              <img src={icons.wishlist} width="20px" />
            </Link>
            <Link className={styles.link_deco} to="/">
              <img src={icons.cart} width="20px" />
            </Link>
            <Link className={styles.link_deco} to="/">
              <img src={icons.user} width="20px" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
