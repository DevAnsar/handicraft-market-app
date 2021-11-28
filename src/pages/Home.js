import React, { useEffect } from "react";
import {useProductsActions} from './../hooks/useProducts'
import Products from "../components/products/Products";

function Home(){
    const {getProducts}=useProductsActions();
    useEffect(()=>{
        getProducts();
    })
    return(

        <div className='container'>

           <Products />
        </div>
      
    )
}
export default Home;