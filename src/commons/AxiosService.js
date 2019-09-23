import axios from 'axios';

class AxiosService {
    constructor(){
        const instance = axios.create({
         headers: { 
            'Content-Type': 'application/json',
             access_token:localStorage.getItem('token')     
             }
        });

        axios.interceptors.response.use(this.handleSuccess,this.handleError);
        this.instance = instance;
    } 
    handleSuccess = (res) => {
        return res;
    }

    handleError = (error) => {
        return Promise.reject(error);
    }
    get = (url) => {
        return this.instance.get(url);
    }
    post = (url, body) => {
        return this.instance.post(url,body);
    }
    put = (url,body) => {
        return this.instance.put(url,body)

    }
    delete = (url) => {
        return this.instance.delete(url);
    }
 }

 export default new AxiosService();