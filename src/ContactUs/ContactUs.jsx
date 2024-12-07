import React from "react";
import './ContactUs.css';
import data from "../content/content";
import AddressCard from "../Component/AddressCard/AddressCard";
const ContactUs=()=>{
    return(
        <>
            <div className="contactUsPageContainer">
                <div className="contactUsHeading">Contact Us</div>
                <div className="contactUsAddress">
                    {data["addresses"].map((e)=>{return <AddressCard key={e.location} location={e.location} minorAddress={e.minorAddress} identify={e.identify} cityAndPinCode={e.cityAndPinCode}/>})}
                </div>
            </div>
        </>
    );
}
export default ContactUs;