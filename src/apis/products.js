import axios from "./custom";


const getProductsApi =async()=>await axios.get(`/products`); 
const getProductApi=async slug=>await axios.get(`/products/${slug}`);

export {getProductsApi,getProductApi}