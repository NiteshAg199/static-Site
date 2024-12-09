import React from "react";
import './Footer.css';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
const Footer=()=>{
    return(
        <>
            <div className="footerContainer">
                <div className="footerContactDetails">
                    <div className="emailIconContainer"><EmailIcon/><div className="contactMail">mail@cloudinsight.in</div></div>
                    <div className="webIconContainer"><LanguageIcon/><div className="contactWebsite">www.cloudinsight.in</div></div>
                </div>
                <div className="allRightReserved">© 2024 All Rights Reserved Terms of Use and Privacy Policy</div>
            </div>
        </>
    )
}
export default Footer;