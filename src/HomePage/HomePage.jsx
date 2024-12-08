import React from "react";
import './HomePage.css';
import images from '../projectImage/images.jpeg'
const HomePage=()=>{
    return(
        <>
            <div className="homePageContainer">
                <div className="NameOfCompany">Cloud Insight Technologies.</div>
                <div className="backgroundContainer" style={{backgroundImage:`url(${images})`}}>
                <div className="contentContainer">
                    <div className="homeContentsHeading">Your One stop Solution</div>
                    <div className="anotherContent">To All Your Required Testing Service needs,Digital Marketing,Training & Recruitment Needs</div>
                </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;