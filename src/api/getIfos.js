import axios from 'axios'

const URL = "http://demo4522838.mockable.io/users"


export const getSometing = ()=>{
    return axios.get('https://demo4522838.mockable.io/users/mass')
        .then((response) => {
           return response.data;
        })
        .catch((error)=> {
        });
}