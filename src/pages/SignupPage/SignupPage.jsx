import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";

import styles from "./SignupPage.module.css";
import Logo_Header from "../../components/logo-header/Logo";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/new-icons/google.png";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import axiosClient from "../../api/axiosClient";
import useAssetsLoader from "../../hooks/useAssetsLoader";
import Preloader from "../../components/Preloader/Preloader";

// Validation schema
const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required")
});

const SignupPage = () => {
    const assets =  [google, Logo_Header]
    const assetsLoading = useAssetsLoader(assets);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 10000);
            return () => clearTimeout(timer); // Cleanup timer if error changes
        }
    }, [error]);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            setError("");

            try {
                const response = await axiosClient.post("/user/signup", values);
                if (response.status === 201) {
                    localStorage.setItem("userEmail", values.email);
                    navigate('/verify');
                }
            } catch (error) {
                setError("There was an error during the signup request.");
            } finally {
                setLoading(false);
            }
        }
    });

    if (assetsLoading) {
        return <Preloader />
    }

    return (
        <div className={styles.signup}>
            <div className={styles.signupSection}>
                <div className={styles.signupLeft}>
                    <div className={styles.signupLeftContent}>
                        <Logo_Header />
                        <p className={styles.head}>Sign Up</p>
                        <p className={styles.textOne}>Fill in information below or register with your social account</p>
                        {error && <p className={styles.error}>{error}</p>}
                        <form onSubmit={formik.handleSubmit}>
                            <div className={styles.nameForm}>
                                <div className={styles.labels}>
                                    <label htmlFor="firstName" className={styles.signupLabels}>First Name *</label><br />
                                    <input 
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter First Name"
                                        {...formik.getFieldProps('firstName')}
                                        className={styles.name}
                                    />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className={styles.error}>{formik.errors.firstName}</div>
                                    ) : null}
                                </div>
                                <div className={styles.labels}>
                                    <label htmlFor="lastName" className={styles.signupLabels}>Last Name *</label><br />
                                    <input 
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter Last Name"
                                        {...formik.getFieldProps('lastName')}
                                        className={styles.name}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className={styles.error}>{formik.errors.lastName}</div>
                                    ) : null}
                                </div>
                            </div>
                            <label htmlFor="email" className={styles.signupLabels}>Email *</label><br />
                            <input 
                                id="email"
                                type="text"
                                placeholder="Email"
                                {...formik.getFieldProps('email')}
                                className={styles.signupInput}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className={styles.error}>{formik.errors.email}</div>
                            ) : null}
                            <label htmlFor="password" className={styles.signupLabels}>Password *</label><br />
                            <input 
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...formik.getFieldProps('password')}
                                className={styles.signupInput}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className={styles.error}>{formik.errors.password}</div>
                            ) : null}
                            <div className={styles.terms}>
                                <input 
                                    id="terms" 
                                    type="checkbox" 
                                    name="terms" 
                                />
                                <label htmlFor="terms" className={styles.signupCheckboxText}>
                                    &nbsp; Agree with <Link to="/">Terms & Conditions</Link> and Privacy Policy
                                </label>
                            </div>
                            <button type="submit" className={`${styles.signupInput} ${styles.signupButton}`}>
                                {loading ? <LoadingIndicator size={14} /> : "Sign Up"}
                            </button>
                            <div className={styles.signupHr}>
                                <hr className={styles.signupHrLine} />&nbsp;&nbsp;
                                <span className={styles.signupHrText}>or Sign Up with</span>&nbsp;&nbsp;
                                <hr className={styles.signupHrLine} />
                            </div>
                            <button className={styles.signupGoogle}>
                                <img src={google} alt="Google Icon" width="13px" />&nbsp;Sign Up With Google
                            </button>
                            <p className={styles.signupSigninLink}>Already have an account? <Link to="/login">Sign In</Link></p>
                        </form>
                    </div>
                </div>
                <div className={styles.signupRight}></div>
            </div>
        </div>
    );
}

export default SignupPage;
