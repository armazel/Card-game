import actionsType from './'

export function addCounter() {
    return {
        type: actionsType.COUNTER_ADD,
    };
}

export function removeCounter() {
    return {
        type: actionsType.COUNTER_REMOVE,
    };
}
