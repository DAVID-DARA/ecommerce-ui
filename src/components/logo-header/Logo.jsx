import "./header.css"
import icon from "../../assets/images/logo-icon.jpg"

const Logo_Header = () => {
    return (
        <>
            <div className="header">
                <img src={icon} alt="" width="60px" />
                <span>&nbsp; Lorem</span>
            </div>
        </>
    );
}

export default Logo_Header;