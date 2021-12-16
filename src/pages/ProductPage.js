import React, { useEffect,useState,Suspense } from "react";
import {useParams} from 'react-router-dom';
import SingleProduct from "../components/products/SingleProduct";
import {getProductApi} from '../apis/products'
import TouchSlider from "../components/layouts/TouchSlider";
import IndexDescription from "../components/index/IndexDescription";
import {toast } from 'react-hot-toast';
function ProductPage(){

    let params=useParams();
    const [data,setData]=useState({"product":{},"similar_products":[]});


    useEffect(()=>{
    

        const getProduct = () =>{
        const id = params.slug;
        getProductApi(id).then(res=>{
            
            setData({
                "product":res.data,
                "similar_products":[res.data]
            });
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