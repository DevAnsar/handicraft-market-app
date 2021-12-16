import React from "react";
import {Row} from 'react-materialize';
import ProductCard from './ProductCard';
function Products({products}){
    return(
      <Row>
            {
                products?.map(p=><ProductCard key={p.id} {...p} />)
            }
      </Row>
    )
}
export default Products;