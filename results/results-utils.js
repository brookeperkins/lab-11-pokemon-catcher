export function getPokeCart() {
    const rawCart = localStorage.getItem('POKESTATS');
    const cart = JSON.parse(rawCart) || [];

    return cart;
}

export function mungeNames(pokeArray){
    const pokeNames = [];

    for (let i = 0; i < pokeArray.length; i++) {
        pokeNames.push(pokeNames.pokemon);
    }

    return pokeNames;
}

export function mungeCaptured(pokeArray){
    const pokeCaptures = [];

    for (let i = 0; i < pokeArray.length; i++) {
        pokeCaptures.push(pokeCaptures.caught);
    }
    
    return pokeCaptures;
}

export function mungeEncountered(pokeArray){
    const pokeEncounters = [];

    for (let i = 0; i < pokeArray.length; i++) {
        pokeEncounters.push(pokeEncounters.caught);
    }
    
    return pokeEncounters;
}

export function clearPokeCart() {
    localStorage.removeItem('POKESTATS');
}