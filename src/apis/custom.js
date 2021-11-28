import axios from "axios";
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});
export default instance;
