import React from "react";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function SingleProduct({product={"title":"" , "body":""}}){
  let navigate = useNavigate();

    return(
        <div className="row">
        <div className="col s12 m12 mt-3">
          <div className="card box text-color">

            <div className="col-12 col-md-6 col-lg-5 product-gallery-box">

              

            </div>
  
            <div className="col-12 col-md-6 col-lg-7 product-details-box"></div>
        
          </div>
        </div>
        
      </div>
     
    )
}
export default SingleProduct;