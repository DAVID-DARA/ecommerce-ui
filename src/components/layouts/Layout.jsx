import Footer from "../common/footer/Footer";
import Navbar from "../common/navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
