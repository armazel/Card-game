import actionsType from '../actions/index';

const State = {
    counterInfo:0
};

export default function Counter(state = State, action) {
    switch (action.type) {


        case actionsType.COUNTER_ADD:
            return {...state, counterInfo: state.counterInfo + 1 };

        case actionsType.COUNTER_REMOVE:
            if(state.counterInfo === 0){
                alert('counter most more than ' + state.counterInfo)
                return {...state, counterInfo: state.counterInfo };
            }
            return {...state, counterInfo: state.counterInfo - 1 };

        case actionsType.UPDATE_COUNTER:
            return{...state, counterInfo: action.payload.value}


        default:
            return state;
    }
}