import Layout from "../../components/layouts/Layout";
import Navbar from "../../components/common/navbar/Navbar";
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className={styles.mainbody}>
          <h1 className={styles.mainTitle}>HomePage</h1>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
