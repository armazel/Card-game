import actionsType from './'



export function activeLoaderToggle(toggle) {
    return {
        type: actionsType.ACTIVE_LOADER,
        toggle:toggle
    };
}

export function visibleRouteLine(toggle) {
    return {
        type: actionsType.VISIBLE_ROUTE_LINE,
        visibleRouteLine:toggle
    };

}

