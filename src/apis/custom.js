import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/app',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});
export default instance;
