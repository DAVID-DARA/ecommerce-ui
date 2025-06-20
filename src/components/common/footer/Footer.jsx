import styles from "./Footer.module.css";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footMain}>
          <div className={styles.footTop}>
            <div className={styles.footTopItems}>
              <Logo />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                repudiandae!
              </p>
            </div>
            <div className={styles.footTopItems}>
              <ul className={styles.footerList}>
                <li>Company</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Career</li>
              </ul>
            </div>
            <div className={styles.footTopItems}>
              <ul className={styles.footerList}>
                <li>Customer Service</li>
                <li>My Account</li>
                <li>Track Your Order</li>
                <li>Return</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className={styles.footTopItems}>
              <ul className={styles.footerList}>
                <li>Our Information</li>
                <li>Privacy</li>
                <li>User Terms & Conditions</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div className={styles.footTopItems}>
              <ul className={styles.footerList}>
                <li>Contact Info</li>
                <li></li>
                <li>example@gmail.com</li>
                <li>8502 Preston Rd. Inglewood, Maine 98380</li>
              </ul>
            </div>
          </div>
          <div className={styles.footLow}></div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
