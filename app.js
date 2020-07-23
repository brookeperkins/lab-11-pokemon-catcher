import pokemonData from './data/pokemon.js';
import { getRandomPokemon, findByName, encounteredPokemon } from './common/utils.js';

let catches = 0;
let pokeDataArray = [];

const labels = document.querySelectorAll('label');
const catchButton = document.querySelector('#catch-button');
// const resultSpan = document.querySelector('#catches-span');

function setPage() {
    let randomPokemon0 = getRandomPokemon(pokemonData);
    let randomPokemon1 = getRandomPokemon(pokemonData);
    let randomPokemon2 = getRandomPokemon(pokemonData);

    while (randomPokemon0.pokemon === randomPokemon1.pokemon || randomPokemon0 === randomPokemon2.pokemon || randomPokemon1.pokemon === randomPokemon2.pokemon) {
        randomPokemon1 = getRandomPokemon(pokemonData);
        randomPokemon2 = getRandomPokemon(pokemonData);
    }

    const label0 = labels[0];

    const input0 = label0.children[0];
    const image0 = label0.children[1];
    const span0 = label0.children[1];
    
    input0.value = randomPokemon0.pokemon;
    image0.src = randomPokemon0.url_image;
    span0.textContent = randomPokemon0.pokemon;
    encounteredPokemon(pokeDataArray, randomPokemon0.pokemon);

    const label1 = labels[1];

    const input1 = label1.children[0];
    const image1 = label1.children[1];
    const span1 = label1.children[1];
    
    input1.value = randomPokemon1.pokemon;
    image1.src = randomPokemon1.url_image;
    span1.textContent = randomPokemon1.pokemon;
    encounteredPokemon(pokeDataArray, randomPokemon1.pokemon);


    const label2 = labels[2];

    const input2 = label2.children[0];
    const image2 = label2.children[1];
    const span2 = label2.children[1];
    
    input2.value = randomPokemon2.pokemon;
    image2.src = randomPokemon2.url_image;
    span2.textContent = randomPokemon2.pokemon;
    encounteredPokemon(pokeDataArray, randomPokemon2.pokemon);
}

catchButton.addEventListener('click', () => {
    catches++;

    const clickedPokemon = document.querySelector('input:checked');
    const pokemonTarget = clickedPokemon.value;
    const caughtPokemon = findByName(pokemonData, pokemonTarget);
    console.log(pokemonData, pokemonTarget);
    pokeDataArray.push(caughtPokemon);

    if (catches === 10) {
        
        alert(`You're out of Pokéballs!`);
        window.location = '../results/results-index.html';
    }

    setPage();
});
setPage();
