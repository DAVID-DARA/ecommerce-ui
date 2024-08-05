import "./LoadingIndicator.css"

const LoadingIndicator = ({size}) => {
    
    const spinnerStyle = {
        width: size,
        height: size,
        borderWidth: size / 9, // Adjust border width relative to size for consistency
    };
    
    return(
        <>
            <div className="loading-indicator">
                <div className="loading-indicator-spinner" style={spinnerStyle}></div>
            </div>
        </>
    ); 
}

export default LoadingIndicator;