import React, { useEffect } from "react";
import {useProductsActions} from './../hooks/useProducts'
import Products from "../components/products/Products";
import NavBar from "../components/layouts/NavBar";

function Home(){
    const {getProducts}=useProductsActions();
    useEffect(()=>{
        getProducts();
    })
    return(

        <div >
           <NavBar />
           <div className='container'>
              <Products />
           </div>
        </div>
      
    )
}
export default Home;