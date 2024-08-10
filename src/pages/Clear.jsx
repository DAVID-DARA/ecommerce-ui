import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const ClearMemory = () => {

    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }, [])
}

export default ClearMemory;