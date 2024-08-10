import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import styles from "./Preloader.module.css";

const Preloader = () => {
    
    return (
        <div className={styles.preloader}>
            <LoadingIndicator size={50} />
        </div>
    );
}

export default Preloader;