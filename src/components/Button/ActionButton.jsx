import { Link, Router, redirect, useNavigate } from "react-router-dom";
import "./Button.css"

const ActionButton = ({Text, path}) => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(path);
    }

    return (
        <>
            <button className="button-style" onClick={handleClick}>
                {Text}
            </button>
        </>
    );
}

export default ActionButton;