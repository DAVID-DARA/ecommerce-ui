import styles from "./ErrorPage.module.css"
import rightArrowIcon from '../../assets/new-icons/right-arrow.png';
import { useNavigate } from "react-router-dom";



const ErrorPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    }

    return(
        <div className={styles.errorPage}>
            <h1 className={styles.errorPageHeading}>404</h1>
            <h1>Oops! Page Not Found</h1><br />
            <p>The page you are looking for cannot be found.</p><br />
            <p>Take a break before trying again.</p>
            <button className={styles.errorPageButton} onClick={handleNavigate}>Back to home&nbsp; <img src={rightArrowIcon} width="20px" alt="right-icon" /></button>
        </div>
    );
}

export default ErrorPage;