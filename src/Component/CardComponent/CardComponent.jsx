import React from "react";
import './CardComponent.css';
const CardComponent=()=>{
    return(
        <>
            <div className="cardContainerOuterCss">
                <div className="cardContaonerHeading">{Heading}</div>
                <div className="cardContaonerContent">{Content}</div>
            </div>
        </>
    )
}