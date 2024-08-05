import "./nav-css.css"
import logo from "../../assets/images/logo-icon.jpg"
import { Link } from "react-router-dom";
import search from "../../assets/new-icons/search.png"
import wishlist from "../../assets/new-icons/wishlist.png"
import cart from "../../assets/new-icons/cart.png"
import user from "../../assets/new-icons/account.png"
import Logo_Header from "../logo-header/Logo";



const Navigation = () => {
    return (
        <>
            <div className="main-bar">
                <div className="nav-items">
                    <div className="left">
                        <Logo_Header />
                    </div>
                    <div className="middle">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Shop</li>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Accessories</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="right">
                        <Link to="/login"><img src={search} alt="search" width="20px" /></Link>
                        <Link to="/login"><img src={wishlist} alt="search" width="20px" /></Link>
                        <Link to="/login"><img src={cart} alt="search" width="20px" /></Link>
                        <Link to="/login"><img src={user} alt="search" width="20px" /></Link>
                        {/* <ActionButton Text={"Login"} path={"/login"}/>
                        <ActionButton Text={"Signup"} path={"/signup "}/> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;