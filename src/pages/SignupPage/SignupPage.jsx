import "./SignupPage.css"
import Logo_Header from "../../components/logo-header/Logo";
import { useState } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import google from "../../assets/new-icons/google.png";

const SignupPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const signup_request = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };

    const sendRequest = () => {
        axios
            .post("http://localhost:4032/signup", signup_request)
            .then((response => {
                const signupResposne = response.data;
                console.log(signupResposne);

                if (response.status == 200) {
                    redirect("/home")
                    console.log("Successful Signup")
                } else {
                    console.log("Failed Signup")
                }
            }))
    }

    function firstNameChange(event) {
        setFirstName(event.target.value);
    }

    function lastNameChange(event) {
        setLastName(event.target.value)
    }

    function emailChange(event) {
        setEmail(event.target.value)
    }

    function passwordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <>
            <div className="signup">
                <div className="section">
                    <div className="signup-left">
                        <div className="content">
                            <Logo_Header />
                            <p className="head">Sign up</p>
                            <p className="text-one">Fill in information below or register with your social account</p>
                            <div className="name-form">
                                <div className="labels">
                                    <span className="signup-labels">First Name *</span><br />
                                    <input type="text" placeholder="Enter First Name" onChange={firstNameChange} value={firstName} className="name" />
                                </div>
                                <div className="labels">
                                    <span className="signup-labels">Last Name *</span><br />
                                    <input type="text" placeholder="Enter Last Name" onChange={lastNameChange} value={lastName} className="name" /><br />
                                </div>
                            </div>
                            <span className="signup-labels">Email *</span><br />
                            <input className="signup-input" type="text" placeholder="Email" onChange={emailChange} value={email}/> <br />
                            <span className="signup-labels">Password *</span><br />
                            <input className="signup-input" type="password" placeholder="Password" onChange={passwordChange} value={password}/> <br />
                            <div className="terms">
                                <input className="signup-input" type="checkbox" name="terms" /><span className="signup-checkbox-text" > &nbsp; Agree with <Link to="/">Terms & Condition</Link> and Privacy Policy</span>
                            </div>
                            {/* <a href="/signup-page">Forgot Password</a> */}
                            <input className="signup-input signup-button" type="button" value="Sign up" onClick={sendRequest} />

                            <div className="signup-hr">
                                <hr className="signup-hr-line" />&nbsp;&nbsp;
                                <span className="signup-hr-text">or Sign Up with</span>&nbsp;&nbsp;
                                <hr className="signup-hr-line"/>
                            </div>

                            <button className="signup-google"><img src={google} alt=""  width="13px"/>&nbsp;Sign Up With Google</button>
                            <p className="signup-signin-link">Already have an account? <Link to="/login">Sign In</Link></p>

                        </div>
                    </div>
                    <div className="signup-right">
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupPage;