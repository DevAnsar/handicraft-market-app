import React,{useState,createContext} from "react";

export const ProductsContext = createContext();
export const ProductsSetContext = createContext();

function ProductsProvider({children}){

    const [products,setProducts]=useState({products:[],product:null});
    
    return(
        <ProductsContext.Provider value={products}>
            <ProductsSetContext.Provider value={setProducts}>
                        {children}
            </ProductsSetContext.Provider>
        </ProductsContext.Provider>
    )
}
export default ProductsProvider;