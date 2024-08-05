import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://ecommerce-platform-e7jp.onrender.com/api",
    headers: {
        'Content-Type': 'application/json',
        // Add any other custom headers if necessary
    }
});

export default axiosClient;