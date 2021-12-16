import React, { useEffect,useState } from "react";
import {useParams} from 'react-router-dom';
import SingleProduct from "../components/products/SingleProduct";
import NavBar from "../components/layouts/NavBar";
import {getCategoryProductApi} from '../apis/products'
function CategoryProducts(){

    let params=useParams();
    const [products,setProducts]=useState([]);

    useEffect(()=>{
            const getProduct = async () =>{
            const category_slug = params.slug;
            const {res}=await getCategoryProductApi(category_slug);
            // .then( (res)=>{
            setProducts(res.data)
            // });
        }
        getProduct();
    },[params.slug]);

    return(

        <div >
           <NavBar />
           <div className='container'>
              
           </div>
        </div>
      
    )
}
export default CategoryProducts;