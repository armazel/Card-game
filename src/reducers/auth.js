import actionsType from '../actions/index';
import storage from '../utils/storage'

const State = {
    authInfo:null
};

export default function Auth(state = State, action) {
    switch (action.type) {


        case actionsType.AUTH:
            return {...state, authInfo: action.payload.auth };

        case actionsType.LOGOUT:
            storage.login = '';
            return {...state, authInfo: ''};

        default:
            return state;
    }
}