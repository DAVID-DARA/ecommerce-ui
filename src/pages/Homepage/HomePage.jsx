import "./HomePage.css"
import Navigation from "../../components/Navbar/Navigation"
import summer_fit from "../../assets/images/test.png"
import star from "../../assets/new-icons/star-ico.png"
import right_arrow from "../../assets/new-icons/right-arrow.png"

const HomePage = () => {
    return (
        <>
            <div className="Home">
                <Navigation />
                <div className="section-one">
                    <div className="main">
                        <div className="left">
                            <div className="summer-sale-info">
                                <img src={star} alt="" width="20px" />&nbsp; <span>50% OFF Summer Super Sale</span>
                            </div>
                            <p className="info-text">Step into Style: Your </p>
                            <p className="info-text">Ultimate Fashion Destination</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore
                            </span>
                            <button className="shop">Shop Now &nbsp; <img src={right_arrow} width="20px" alt="" /></button>
                        </div>
                        <div className="right">
                            <img src={summer_fit} className="" alt="Summer-sales-outfit" width="350px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;