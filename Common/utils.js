//get a random pokemon
export function getRandomPokemon(pokemonData) {
    const randomPokemonIndex = Math.floor(Math.random() * pokemonData.length);
    
    return pokemonData[randomPokemonIndex];
}
