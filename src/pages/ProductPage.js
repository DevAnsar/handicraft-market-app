import React, { useEffect,useState,Suspense } from "react";
import {useParams} from 'react-router-dom';
import SingleProduct from "../components/products/SingleProduct";
import {getProductApi} from '../apis/products'
import TouchSlider from "../components/layouts/TouchSlider";
import IndexDescription from "../components/index/IndexDescription";
import {toast } from 'react-hot-toast';
import './../styles/products.css';
function ProductPage(){

    let params=useParams();
    const [data,setData]=useState({"product":{},"similar_products":[]});
    useEffect(()=>{
    

        const getProduct = () =>{
        const slug = params.slug;
        getProductApi(slug).then(res=>{
            let {status,data,message}=res;
            if(status){
                setData({
                    "product":data.data.product,
                    "similar_products":[data.data.product]
                });
            }else{
                toast.error(message)
            }

        }).catch(err=>{
            toast.error('محصول دریافت نشد')
            console.log('getProductApi error:',err)
        });
        }
        getProduct();
    },[params.slug]);

    return(
           <div className='container'>
              <SingleProduct product={data.product} />
              {data &&(<TouchSlider title={`محصولات مشابه`} items={data.similar_products}  />) }
              <IndexDescription />
           </div> 
    )
}
export default ProductPage;