import React from "react";
import './ProductAndServiceCard.css';
const ProductAndServiceCard=({cardHeading,cardContent})=>{
    return(
        <>
            <div className="productAndServiceCardContainer">
                <div className="ProductAndServiceName">{cardHeading}</div>
                <div className="ProductAndServiceContent">{cardContent}</div>
            </div>
        </>
    );
}
export default ProductAndServiceCard;