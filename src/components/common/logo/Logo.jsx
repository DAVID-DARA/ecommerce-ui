import styles from "./Logo.module.css";
import logoIcon from "../../../assets/images/logo-icon.png";
import { Link } from "react-router";

const Logo = ({
  imgWidth = "50px",
  imgRadius = "0px",
  textSize = "30px",
  textColor = "black",
}) => {
  const imageStyle = {
    borderRadius: imgRadius, // Use imgRadius directly for borderRadius
  };

  const logoSpanStyle = {
    color: textColor, // Set the text color dynamically
    fontSize: textSize, // Set the text size dynamically
  };

  return (
    <>
      <div className={styles.logo}>
        <Link className={styles.logoLink}>
          <img src={logoIcon} alt="Logo" width={imgWidth} style={imageStyle} />
          <span style={logoSpanStyle}>Lorem</span>
        </Link>
      </div>
    </>
  );
};

export default Logo;
