import React from "react";
import './productAndServices.css';
import data from "../content/content";
import ProductAndServiceCard from "../Component/ProductAndServiceCard/ProductAndServiceCard";
const ProductAndServices=()=>{
    return(
        <>
            <div className="ProductAndServiceContainer">
                <div className="productAndServiceHeading">Product And Services</div>
                <div className="productANdServiceContainer">
                    {data["Product/Services"].map(e=>{
                      return  <ProductAndServiceCard cardHeading={e.cardHeading} cardContent={e.cardContent}/>
                    })}
                </div>
            </div>
        </>
    )
}
export default ProductAndServices;