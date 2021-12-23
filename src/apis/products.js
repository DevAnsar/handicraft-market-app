import axios from "./custom";


const getProductsApi =async()=>await axios.get(`/products`); 
const getProductApi= slug=> axios.get(`/products/${slug}`);

export {getProductsApi,getProductApi}