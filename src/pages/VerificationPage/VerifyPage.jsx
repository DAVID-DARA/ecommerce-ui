import "./VerifyPage.css";
import Logo_Header from "../../components/logo-header/Logo";
import { useEffect, useRef, useState } from "react";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";

const VerifyPage = () => {
    const inputs = useRef([]);
    const [email, setEmail] = useState("example@gmail.com");
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
            setEmail(userEmail);
            console.log(email)
        }
    }, []);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 10000);

            // Cleanup the timeout if the component unmounts or error changes
            return () => clearTimeout(timer);
        }
    }, [error]);

    const focusNextInput = (index) => {
        if (inputs.current[index + 1]) {
            inputs.current[index + 1].focus();
        }
    };

    const otpNumber = parseInt(otp.join(""), 10);

    const verificationRequestDto = {
        email: email,
        otp: otpNumber
    };

    const sendVerificationRequest = () => {
        console.log(email)
        console.log(typeof(email));

        console.log(otpNumber)
        console.log(typeof(otpNumber));
        
        
        if (otp.includes("")) {
            setError("All fields are required.");
            return;
        }
        setLoading(true);

        axiosClient
            .post("/user/verify", verificationRequestDto)
            .then((response) => {
                const verificationResponse = response.data;
                console.log(response)
                console.log(verificationResponse);
                if (response.status === 200 ) {
                    console.log(response.data.token);
                    localStorage.setItem("accessToken", response.data.token);
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error("There was an error during the verification request:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                } else if (error.request) {
                    console.error("Request data:", error.request);
                } else {
                    console.error("Error message:", error.message);
                }
                setLoading(false);
                setError("There was a problem with the verification request. Please try again.");
            });
    };

    return (
        <>
            <div className="verify">
                <div className="verify-section">
                    <div className="verify-left">
                        <div className="verify-left-content">
                            <Logo_Header />
                            <p className="verify-left-head">Verify Code</p>
                            <p className="verify-left-text-one">Please enter the code we just sent to {email}</p>

                            <p className="verify-box-head">Code *</p>
                            <div className="verify-input-box">
                                {otp.map((value, index) => (
                                    <input
                                        key={index.toString()}
                                        ref={(ref) => (inputs.current[index] = ref)}
                                        style={{
                                            width: '3rem',
                                            height: '3rem',
                                            margin: '0 0.8rem 0 0',
                                            textAlign: 'center',
                                            fontSize: '1.5rem'
                                        }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={value}
                                        onChange={(e) => {
                                            let newOtp = [...otp];
                                            newOtp[index] = e.target.value;
                                            setOtp(newOtp);
                                            if (e.target.value.length === 1) {
                                                focusNextInput(index);
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
                                                inputs.current[index - 1].focus();
                                            }
                                        }}
                                    />
                                ))}
                            </div>

                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            <button className="verify-button" onClick={sendVerificationRequest}>
                                {loading ? <LoadingIndicator size={14} /> : "Verify"}
                            </button>
                            <p className="verify-resend-text">
                                Didn't receive code? <button className="verify-resend-button">Resend Code</button>
                            </p>
                        </div>
                    </div>
                    <div className="verify-right"></div>
                </div>
            </div>
        </>
    );
};

export default VerifyPage;
