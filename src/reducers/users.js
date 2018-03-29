import actionsType from '../actions/index';

const State = {
    usersData: null
};

export default function Counter(state = State, action) {
    switch (action.type) {

        case actionsType.GET_USERS:
            return {...state, usersData: action.data };

        default:
            return state;
    }
}