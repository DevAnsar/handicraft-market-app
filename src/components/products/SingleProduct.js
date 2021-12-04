import React from "react";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function SingleProduct({product}){
  let navigate = useNavigate();

    return(
        <div className="row">
        <div className="col s12 m12 mt-3">
          <div className="card box text-color">
  
            <div className="card-content">
            <span className="card-title text-color">{product.title}</span>
              <p className='text-color'>{product.body}</p>
            </div>
            <div className="card-action">
             <Link to={`/products/#`}> </Link>
             <a href="/#" onClick={(e)=>{
               e.preventDefault();
               navigate(-1) 
             }}>Go Back!</a>
            </div>
          </div>
        </div>
        
      </div>
     
    )
}
export default SingleProduct;