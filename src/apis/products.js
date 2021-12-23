import axios from "./custom";


const getProductsApi =(query)=>axios.get(`/products${query}`); 
const getProductApi= slug=> axios.get(`/products/${slug}`);

export {getProductsApi,getProductApi}