import actionsType from '../actions/index';

const State = {
    authInfo:null
};

export default function Auth(state = State, action) {
    switch (action.type) {


        case actionsType.AUTH:
            return {...state, authInfo: action.payload.auth };

        default:
            return state;
    }
}