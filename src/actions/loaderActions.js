import actionsType from './'



export function activeLoaderToggle(toggle) {
    return {
        type: actionsType.GET_USERS,
        payload:{
            activeLoaderFlag:toggle
        }
    };

}

