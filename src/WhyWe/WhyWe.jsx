import React from "react";
import './WhyWe.css';
import data from "../content/content";
const WhyWe=()=>{
    return(
        <>
            <div className="whyWeContainer">
                <div className="whyWeHeading">Why We</div>
                <div className="whyWeListContent">
                    {data["WhyWe"].map((e)=>
                        {
                            return  <li className="whyWeListItem">{e}</li>;
                        }
                    )}
                </div>
            </div>
        </>
    )
}
export default WhyWe;