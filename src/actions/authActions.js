import actionsType from './'
import storage from '../utils/storage'


export function authGetInfo() {
    return {
        type: actionsType.AUTH,
        payload:{
            auth: !!storage.login
        }
    };
}

export function logout() {
    return {
        type: actionsType.LOGOUT,
        payload:{
            auth: ''
        }
    };
}

