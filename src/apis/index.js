import axios from "./custom";


const getIndexApi =async()=>await axios.get(`/index`); 
const getCategoriesApi =async()=>await axios.get(`/categories`); 


export {getIndexApi,getCategoriesApi}