import React,{useState} from "react"
import { ProductsContext,ProductsSetContext  } from "../providers/ProductsProvider"
import {getProductsApi} from '../apis/products'
import {toast} from 'react-hot-toast'
function useProducts() {
    return React.useContext(ProductsContext)
}
function useSetProducts() {
    return React.useContext(ProductsSetContext)
}

function useProductsActions(){

    const setProducts=useSetProducts()
    const [loading,setLoading]=useState(false)

    const getProducts = async (query) =>{

        try{

            setLoading(true)
            let res = await getProductsApi(query);
            let {status,data,message}=res.data;
            if(status){
                setProducts(data)
            }else{
                toast.error(message)
            }
            setLoading(false);
        }catch(error){
            toast.error(error)
        }
    }
    return {getProducts,loading};
}
export {useProducts,useSetProducts,useProductsActions}