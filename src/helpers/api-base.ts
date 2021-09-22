import axios from 'axios'
const Api = axios.create({
    baseURL: "/",
    timeout: 100000,
   
});
Api.interceptors.request.use(function (config) {   
// console.log('request start')  
    config.headers['Content-Type']= 'application/json';   
    return config;
  }, function (error) {
    
    return Promise.reject(error);
});

Api.interceptors.response.use((response)=>{   
    // console.log('request end')    
    return response
},(error)=>{
   
    return Promise.reject(error);
})
export default Api;