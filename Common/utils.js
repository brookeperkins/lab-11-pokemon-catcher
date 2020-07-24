//get a random pokemon
export function getRandomPokemon(pokemonData) {
    const randomPokemon = Math.floor(Math.random() * pokemonData.length);
    
    return pokemonData[randomPokemon];
}

export function findByName(pokeArray, pokeName) {
    for (let i = 0; i < pokeArray.length; i++){
        const arrayItem = pokeArray[i];
        if (pokeName === arrayItem.pokemon) {
            return arrayItem;
        } 
    } return null;
}

export function encounteredPokemon(pokeDataArray, pokemon) {
    let encountered = findByName(pokeDataArray, pokemon);
 
    if (encountered) {
        encountered.encounters++;
    } else {
        const newEncounter = {
            pokemon: pokemon,
            encounters : 1,
            caught: 0
        };
        pokeDataArray.push(newEncounter);
    }
}
