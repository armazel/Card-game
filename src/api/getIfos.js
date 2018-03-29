import axios from 'axios'


export const getSometing = ()=>{
    return axios.get('')
        .then( (response) => {
            console.log(response);
        })
        .catch((error)=> {
            console.log(error);
        });
}