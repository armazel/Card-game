import actionsType from '../actions/index';

const State = {
    isOpenedUserModal: false
};

export default function ToggleOpenedUserModal(state = State, action) {
    switch (action.type) {

        case actionsType.IS_OPENED_USER_MODAL:
            return {...state, isOpenedUserModal: action.toggle };

        default:
            return state;
    }
}