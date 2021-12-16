import React,{useState,createContext} from "react";

export const ProductContext = createContext();
export const ProductSetContext = createContext();

function ProductProvider({children}){

    const [product,setProduct]=useState([]);
    
    return(
        <ProductContext.Provider value={product}>
            <ProductSetContext.Provider value={setProduct}>
                        {children}
            </ProductSetContext.Provider>
        </ProductContext.Provider>
    )
}
export default ProductProvider;