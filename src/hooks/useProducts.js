import React from "react"
import { ProductsContext,ProductsSetContext  } from "../providers/ProductsProvider"
import {getProductsApi} from '../apis/products'
import {toast} from 'react-hot-toast'
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
            let {status,data,message}=res.data;
            if(status){
                setProducts(data)
            }else{
                toast.error(message)
            }
        }).catch(err=>{
            toast.error(err.message)
        });
    }
    return {getProducts};
}
export {useProducts,useSetProducts,useProductsActions}