import React from "react";
import "./AddressCard.css";
const Address=({location,minorAddress,identify,cityAndPinCode})=>{
    return(
        <>
            <div className="addressCardContainer">
                <div className="addressFieldsBox">
                    <div className="addressCardLocation">{location}</div>
                    <div className="addressCardLocationMinorAddress">{minorAddress}</div>
                    <div className="addressCardLocationidentify">{identify}</div>
                    <div className="addressCardLocationCityAndPinCode">{cityAndPinCode}</div>
                </div>
            </div>
        </>
    )
}
export default Address;