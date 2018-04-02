import actionsType from './'



export function activeLoaderToggle(toggle) {
    return {
        type: actionsType.ACTIVE_LOADER,
        toggle:toggle
    };

}

