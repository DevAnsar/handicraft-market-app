import React,{useEffect} from "react";
// import Products from '../components/products/Products';
import {useProductsActions,useProducts} from './../hooks/useProducts';
import ProductCard from '../components/products/ProductCard';
import IndexDescription from '../components/index/IndexDescription';

function ProductsPage({}){
    const {getProducts}=useProductsActions();
    const products=useProducts();
    console.log('products',products);
    useEffect(()=>{

        getProducts();
        // console.log('ProductsPage relode')

    },[]);

    return(
        <section >
            <div className="container">

            <section className='slider-box box '>
            <h5 className='row header'>
                <div className='col s12 center-header'>
                    <span className=" text-color  active">
                      {/* {title} */}
                      تست
                    </span>
                
                </div>
                <div className="divider" />
            </h5>
            <div className='row slider-items'>
                {
                    products?.map(product=><ProductCard key={product.id} product={product} />)
                }
            </div>
            </section>

            <IndexDescription text={''} />

            </div>
        </section>
      
    )
}
export default ProductsPage;