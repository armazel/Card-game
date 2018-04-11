import actionsType from '../actions/index';

const State = {
    activeLoaderFlag: null,
    visibleRouteLine: true
};

export default function LoaderActive(state = State, action) {
    switch (action.type) {

        case actionsType.ACTIVE_LOADER:
            return {...state, activeLoaderFlag: action.toggle };

        case actionsType.VISIBLE_ROUTE_LINE:
            return {...state, visibleRouteLine: action.visibleRouteLine};

        default:
            return state;
    }
}