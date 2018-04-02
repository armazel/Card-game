import actionsType from '../actions/index';

const State = {
    activeLoaderFlag: null
};

export default function LoaderActive(state = State, action) {
    switch (action.type) {

        case actionsType.ACTIVE_LOADER:
            return {...state, activeLoaderFlag: action.toggle };

        default:
            return state;
    }
}