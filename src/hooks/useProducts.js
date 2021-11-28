import React from "react"
import { ProductsContext,ProductsSetContext  } from "../providers/ProductsProvider"
import {getProductsApi} from '../apis/products'

function useProducts() {
    return React.useContext(ProductsContext);
}
function useSetProducts() {
    return React.useContext(ProductsSetContext);
}

function useProductsActions(){

    const setProducts=useSetProducts();

    const getProducts =() =>{
        getProductsApi().then(res=>{
            // console.log(res);
            setProducts((prevProducts)=>{
                return{
                    ...prevProducts,
                    products:res.data
                }
            })
        });
    }
    return {getProducts};
}
export {useProducts,useSetProducts,useProductsActions}