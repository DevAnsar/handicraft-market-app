import axios from "./custom";


const getProductsApi =async()=>await axios.get(`/posts`); 
const getProductApi=async id=>await axios.get(`/posts/${id}`);

export {getProductsApi,getProductApi}