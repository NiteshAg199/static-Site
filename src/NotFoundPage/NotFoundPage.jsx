import React from "react";
import "./NotFoundPage.css";
const NotFoundPage=()=>{
    // const navigate
    const handleNotFound=()=>{
        console.log("go to Home Page");
    }
    return(
        <>
            <div className="notFoundContainer">
                <div className="notFoundContent">
                    <div className="notFountErrorCode">Error 404</div>
                    <div className="notFoundHeading">Page Not Found</div>
                </div>
                <div className="btn">
                    <button onClick={handleNotFound}>
                        Go to Home Page
                    </button>
                </div>
            </div>
        </>
    )
}
export default NotFoundPage;