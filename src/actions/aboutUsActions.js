import actionsType from './'
import {getSometing} from '../api/getIfos'
import bodyParser from 'body-parser'


export function getUsers() {
    return {
       type: actionsType.GET_USERS,
       payload:{
           users:''
       }
   };

}

