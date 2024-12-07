import React from "react";
import './AboutPage.css';
import data from "../content/content";
const AboutPage=()=>{
    return(
        <>
            <div className="aboutUsPage">
                <div className="aboutPageHeading">About Us</div>
                <div className="aboutPageContent">
                    {
                    data["aboutPage"].map(e=>{
                        return  <li className="aboutPagePoints">{e}</li>
                    })
                    }
                </div>
            </div>
        </>
    );
}
export default AboutPage;