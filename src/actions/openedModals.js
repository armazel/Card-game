import actionsType from './'



export function isOpenedUserModal(toggle) {
    return {
        type: actionsType.IS_OPENED_USER_MODAL,
        toggle:toggle
    };
}



