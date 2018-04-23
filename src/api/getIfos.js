import axios from 'axios'

const URL = "http://demo4522838.mockable.io/users"


export const getSometing = ()=>{
    return axios.get('http://localhost:5000/api/todo/1')
        .then((response) => {
            console.log(response);
           return response.data;
        })
        .catch((error)=> {
        });
}