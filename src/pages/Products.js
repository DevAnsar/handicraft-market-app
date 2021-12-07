import React, { useEffect,useState } from "react";
import {useParams} from 'react-router-dom';
import SingleProduct from "../components/products/SingleProduct";
import NavBar from "../components/layouts/NavBar";
import {getProductApi} from '../apis/products'
function Products(){

    let params=useParams();
    const [product,setProduct]=useState({});

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

        <div >
           <NavBar />
           <div className='container'>
              <SingleProduct product={product} />
           </div>
        </div>
      
    )
}
export default Products;