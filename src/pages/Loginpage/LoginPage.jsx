import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./LoginPage.module.css";
import Logo_Header from "../../components/logo-header/Logo";
import google from "../../assets/new-icons/google.png";
import useAssetsLoader from "../../hooks/useAssetsLoader";
import Preloader from "../../components/Preloader/Preloader";

const validationSchema = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required")
});

const LoginPage = () => {
    const assets = [google, Logo_Header];
    const assetsLoading = useAssetsLoader(assets);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: async(values) => {
            setLoading(true);
            setError("");

            try {
                const response = await axios.post("http://localhost:4032/api/user/login", values);
                if (response.status === 200) {
                    localStorage.setItem("accessToken", response.data.token);
                    navigate("/");
                }
            } catch (error) {
                setError("There was an error during the login request.");
            } finally {
                setLoading(false);
            }
        }
    });

    if (assetsLoading) {
        return <Preloader />;
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginSection}>
                <div className={styles.loginLeft}>
                    <div className={styles.loginLeftContent}>
                        <Logo_Header />
                        <p className={styles.loginLeftHead}>Sign In</p>
                        <p className={styles.loginLeftTextOne}>Please fill your details to access your account</p>
                        {error && <p className={styles.error}>{error}</p>}
                        <form onSubmit={formik.handleSubmit}>
                            <label className={styles.loginLabels} htmlFor="email">Email *</label><br />
                            <input 
                                id="email"
                                type="text" 
                                placeholder="Email" 
                                className={styles.loginInput} 
                                {...formik.getFieldProps('email')}
                            /> <br />
                            <label className={styles.loginLabels} htmlFor="password">Password *</label><br />
                            <input 
                                id="password"
                                type="password" 
                                placeholder="Password" 
                                className={styles.loginInput} 
                                {...formik.getFieldProps('password')}
                            /> <br />
                            <div className={styles.loginCheckboxPassword}>
                                <div className={styles.loginCheckbox}>
                                    <input type="checkbox" id="rememberMe" /> &nbsp;
                                    <label htmlFor="rememberMe" className={styles.loginCheckboxText}>Remember me</label>
                                </div>
                                <div className={styles.loginResetPassword}>
                                    <Link to="/forgot-password"><span className={styles.loginForgotPword}>Forgot Password?</span></Link>
                                </div>
                            </div>
                            <button type="submit" className={`${styles.loginInput} ${styles.loginButton}`}>Sign In</button>
                        </form>
                        <div className={styles.loginHr}>
                            <hr className={styles.loginHrLine} />&nbsp;&nbsp;
                            <span className={styles.loginHrText}>or Sign In with</span>&nbsp;&nbsp;
                            <hr className={styles.loginHrLine}/>
                        </div>
                        <button className={styles.loginGoogle}>
                            <img src={google} alt="Google Icon" width="13px"/>&nbsp;Sign In With Google
                        </button>
                        <p className={styles.loginSignupLink}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
                <div className={styles.loginRight}></div>
            </div>
        </div>
    );
}

export default LoginPage;
