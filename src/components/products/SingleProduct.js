import React from "react";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function SingleProduct({product}){
  let navigate = useNavigate();

    return(
        <div className="row">
        <div className="col s12 m12 mt-3">
          <div className="card">
  
            <div className="card-content">
            <span className="card-title">{product.title}</span>
              <p>{product.body}</p>
            </div>
            <div className="card-action">
             <Link to={`/products/#`}> </Link>
             <div onClick={()=>{navigate(-1)}}>Go Back!</div>
            </div>
          </div>
        </div>
        
      </div>
     
    )
}
export default SingleProduct;