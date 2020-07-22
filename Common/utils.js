//get a random pokemon
export function getRandomPokemon(pokemonData) {
    const randomPokemonIndex = Math.floor(Math.random() * pokemonData.length);
    
    return pokemonData[randomPokemonIndex];
}

export function findById(pokemonData, pokeId) {
    let matchedPokemon = null;
    const pokeNumber = Number(pokeId);

    for (let i = 0; i < pokemonData.length; i++){
        if (pokeNumber === pokemonData[i].id){
            matchedPokemon = pokemonData[i];
        }
    }
    return matchedPokemon;
}

export function encounteredPokemonTotals(encounteredArray, id) {
    let encountered = findById(encounteredArray, id);
 
    if (encountered) {
        encountered.encounters++;
            
    } else {
        const newEncounter = {
            id: id,
            encounters : 1,
            caught: 0
        };
        encounteredArray.push(newEncounter);
    }
        
}

let encounteredArray = [];

export function caughtPokemonTotals(caughtArray, id){
    let caught = findById(caughtArray, id);
    if (caught){
        caught.caught++;   
    } else {
        const catchAPokemon = {
            id: id,
            encounters: 1,
            caught: 1
        };
        encounteredArray.push(catchAPokemon);
    }
}
