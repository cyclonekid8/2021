import axios from 'axios';
export default axios.create({
    baseURL: "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek",
    headers:{
       'x-api-key':'PDprxfeN6h773d3G9RvBN2zp6H79R0tjp17Fhd0d' 
    }
});

