import "./LoginPage.css"
import Logo_Header from "../../components/logo-header/Logo";
import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const LoginPage = () => {
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
            <div className="login">
                <div className="section">
                    <div className="left">
                        <div className="content">
                            <Logo_Header />
                            <p className="head">Sign up</p>
                            <p className="text-one">Fill in information below or register with your social account</p>
                            <div className="name-form">
                                <div className="labels">
                                    <span>First Name *</span><br />
                                    <input type="text" placeholder="Enter First Name" onChange={firstNameChange} value={firstName} className="name" />
                                </div>
                                <div className="labels">
                                    <span>Last Name *</span><br />
                                    <input type="text" placeholder="Enter Last Name" onChange={lastNameChange} value={lastName} className="name" /><br />
                                </div>
                            </div>
                            <span>Email *</span><br />
                            <input type="text" placeholder="Email" onChange={emailChange} value={email}/> <br />
                            <span>Password *</span><br />
                            <input type="password" placeholder="Password" onChange={passwordChange} value={password}/> <br />
                            <input type="checkbox" name="remember" /><span>Rememebr me &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                            {/* <a href="/login-page">Forgot Password</a> */}
                            <input type="button" value="Sign up" onClick={sendRequest} />
                        </div>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;