//get a random pokemon
export function getRandomPokemon(pokemonData) {
    const randomPokemonIndex = Math.floor(Math.random() * pokemonData.length);
    
    return pokemonData[randomPokemonIndex];
}

export function findByName(someArray, pokemon) {
    let matchedPokemon = null;
    const name = pokemon.pokemon;

    for (let i = 0; i < someArray.length; i++){
        if (name === someArray[i].pokemon) {
            matchedPokemon = someArray[i];
        }
    }
    return matchedPokemon;
}

// export function encounteredPokemonTotals(pokeDataArray, pokemon) {
//     let encountered = findByName(pokeDataArray, pokemon);
 
//     if (encountered) {
//         encountered.encounters++;
            
//     } else {
//         const newEncounter = {
//             id: id,
//             encounters : 1,
//             caught: 0
//         };
//         encounteredArray.push(newEncounter);
//     }
        
// }


// export function caughtPokemonTotals(pokeDataArray, id){
//     let caught = findById(pokeDataArray, id);
//     if (caught){
//         caught.caught++;   
//     } else {
//         const catchAPokemon = {
//             id: id,
//             encounters: 1,
//             caught: 1
//         };
//         pokeDataArray.push(catchAPokemon);
//     }
// }
