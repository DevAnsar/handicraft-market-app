import React, { useEffect,useState } from "react";
import {Link,useParams,useNavigate} from 'react-router-dom';
import {getProductApi} from './../../apis/products'

function SingleProduct(){

  let params=useParams();
  let navigate = useNavigate();
  const [product,setProduct]=useState({title:"",body:""});


  
  useEffect(()=>{
    

    const getProduct = () =>{
      const id = params.id;
      getProductApi(id).then(res=>{
        setProduct(res.data)
      });
    }
    getProduct();
  },[params.id]);

    return(

        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
          
              <span className="card-title">{product.title}</span>
            </div>
            <div className="card-content">
              <p>{product.body}</p>
            </div>
            <div className="card-action">
             <Link to={`/products/#`}> </Link>
            </div>
          </div>
        </div>
        <div onClick={()=>{navigate(-1)}}>Go Back!</div>
      </div>
     
    )
}
export default SingleProduct;