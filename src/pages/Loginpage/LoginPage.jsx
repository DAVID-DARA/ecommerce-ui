import "./LoginPage.css"
import { useState } from "react";
import Logo_Header from "../../components/logo-header/Logo";
import { Link } from "react-router-dom";
import google from "../../assets/new-icons/google.png"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function emailChange (event) {
        setEmail(event.target.vslue);
    }
    
    function passwordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <>
            <div className="login">
                <div className="login-section">
                    <div className="login-left">
                        <div className="login-left-content">
                            <Logo_Header />
                            <p className="login-left-head">Sign In</p>
                            <p className="login-left-text-one">Please fill your details to access your account</p>

                            <span className="login-labels">Email *</span><br />
                            <input className="login-input" type="text" placeholder="Email" onChange={emailChange} value={email}/> <br />
                            <span className="login-labels">Password *</span><br />
                            <input className="login-input" type="password" placeholder="Password" onChange={passwordChange} value={password}/> <br />
                            <div className="login-checkbox-password">
                                <div className="login-checkbox">
                                    <input type="checkbox" name="" id="" /> &nbsp;
                                    <span className="login-checkbox-text">Remember me</span>
                                </div>
                                <div className="login-reset-password">
                                    <Link to="/"><span className="login-forgot-pword">Forgot Password?</span></Link>
                                </div>
                            </div>

                            <input className="login-input login-button" type="button" value="Sign up" />

                            <div className="login-hr">
                                <hr className="login-hr-line" />&nbsp;&nbsp;
                                <span className="login-hr-text">or Sign Up with</span>&nbsp;&nbsp;
                                <hr className="login-hr-line"/>
                            </div>

                            <button className="login-google"><img src={google} alt=""  width="13px"/>&nbsp;Sign Up With Google</button>
                            <p className="login-signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                    <div className="login-right">

                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;