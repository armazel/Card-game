import actionsType from '../actions/index';

const State = {
    activeLoaderFlag: false
};

export default function LoaderActive(state = State, action) {
    switch (action.type) {

        case actionsType.ACTIVE_LOADER:
            return {...state, activeLoader: action.payload };

        default:
            return state;
    }
}