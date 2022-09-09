import axios from 'axios';

const url = "http://192.168.1.6"
// const url = "http://192.168.43.80" 
//const url =  "http://192.168.43.172" 
//const url = 'http://192.168.139.40'

const instanse = axios.create({
    baseURL: url + ':8000/api/',
});



export default instanse;
