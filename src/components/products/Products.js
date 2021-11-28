import React from "react";
import {Row} from 'react-materialize';
import {useProducts} from '../../hooks/useProducts';
import ProductCard from './ProductCard';

function Products(){
    const products=useProducts();
    return(
      <Row>
            {
                products.map(p=><ProductCard key={p.id} {...p} />)
            }
      </Row>
    )
}


export default Products;