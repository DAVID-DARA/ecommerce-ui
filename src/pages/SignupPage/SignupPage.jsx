import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./SignupPage.module.css";
import Logo_Header from "../../components/logo-header/Logo";
import google from "../../assets/new-icons/google.png";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(""), 10000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const { firstName, lastName, email, password } = formData;

    const validateForm = () => {
        if (!firstName || !lastName || !email || !password) {
            setError("All fields are required.");
            return false;
        }
        return true;
    };

    const sendRequest = () => {
        if (!validateForm()) return;

        setLoading(true);
        setError("");

        axios
            .post("http://localhost:4032/api/user/signup", formData)
            .then((response) => {
                if (response.status === 201) {
                    localStorage.setItem("userEmail", email);
                    navigate('/verify');
                } else {
                    setError("Signup failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("There was an error during the signup request:", error);
                setError("Signup failed. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className={styles.signup}>
            <div className={styles.section}>
                <div className={styles.signupLeft}>
                    <div className={styles.signupContent}>
                        <Logo_Header />
                        <p className={styles.head}>Sign up</p>
                        <p className={styles.textOne}>Fill in information below or register with your social account</p>
                        <div className={styles.nameForm}>
                            <div className={styles.labels}>
                                <label className={styles.signupLabels} htmlFor="firstName">First Name *</label><br />
                                <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" onChange={handleChange} value={firstName} className={styles.name} required />
                            </div>
                            <div className={styles.labels}>
                                <label className={styles.signupLabels} htmlFor="lastName">Last Name *</label><br />
                                <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" onChange={handleChange} value={lastName} className={styles.name} required /><br />
                            </div>
                        </div>
                        <label className={styles.signupLabels} htmlFor="email">Email *</label><br />
                        <input className={styles.signupInput} type="email" id="email" name="email" placeholder="Email" onChange={handleChange} value={email} required /> <br />
                        <label className={styles.signupLabels} htmlFor="password">Password *</label><br />
                        <input className={styles.signupInput} type="password" id="password" name="password" placeholder="Password" onChange={handleChange} value={password} required /> <br />
                        {error && <p style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{error}</p>}
                        <div className={styles.terms}>
                            <input className={styles.signupInput} type="checkbox" name="terms" /><span className={styles.signupCheckboxText}> &nbsp; Agree with <Link to="/">Terms & Condition</Link> and Privacy Policy</span>
                        </div>
                        <button className={`${styles.signupInput} ${styles.signupButton}`} onClick={sendRequest}>{loading ? <LoadingIndicator size={14} /> : "Sign up"}</button>
                        <div className={styles.signupHr}>
                            <hr className={styles.signupHrLine} />&nbsp;&nbsp;
                            <span className={styles.signupHrText}>or Sign Up with</span>&nbsp;&nbsp;
                            <hr className={styles.signupHrLine} />
                        </div>
                        <button className={styles.signupGoogle}><img src={google} alt="" width="13px" />&nbsp;Sign Up With Google</button>
                        <p className={styles.signupSigninLink}>Already have an account? <Link to="/login">Sign In</Link></p>
                    </div>
                </div>
                <div className={styles.signupRight}></div>
            </div>
        </div>
    );
}

export default SignupPage;
