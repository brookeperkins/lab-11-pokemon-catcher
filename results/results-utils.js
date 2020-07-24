import { findByName } from '../common/utils.js';
import pokeData from '../data/pokemon.js';

export function getPokeCart() {
    const rawCart = localStorage.getItem('POKESTATS');
    const cart = JSON.parse(rawCart) || [];

    return cart;
}

export function mungeNames(pokeArray){
    const pokeNames = [];
    for (let i = 0; i < pokeArray.length; i++) {
        const pokemon = pokeArray[i];
        pokeNames.push(pokemon.pokemon);
    }

    return pokeNames;
}

export function mungeCaptured(pokeArray){
    const pokeCaptures = [];

    for (let i = 0; i < pokeArray.length; i++) {
        const pokemon = pokeArray[i];
        pokeCaptures.push(pokemon.caught);
    }
    
    return pokeCaptures;
}

export function mungeEncountered(pokeArray){
    const pokeEncounters = [];

    for (let i = 0; i < pokeArray.length; i++) {
        const pokemon = pokeArray[i];
        pokeEncounters.push(pokemon.encounters);
    }
    
    return pokeEncounters;
}

export function mungePokeData(pokeArray, property){
    const pokeProperty = [];
    for (let i = 0; i < pokeArray.length; i++) {
        const pokemon = findByName(pokeData, pokeArray[i].pokemon);
        pokeProperty.push(pokemon[property]);
    }
    return pokeProperty;
}

export function clearPokeCart() {
    localStorage.removeItem('POKESTATS');
}