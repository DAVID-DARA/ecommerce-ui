import "./header.css"
import icon from "../../assets/images/logo-icon.jpg"
import { Link } from "react-router-dom";

const Logo_Header = () => {
    return (
        <>
            <div className="logo">
                <Link className="logo-link" to="/">
                    <img src={icon} alt="" width="50px" />
                    <span>&nbsp; Lorem</span>
                </Link>
            </div>
        </>
    );
}

export default Logo_Header;