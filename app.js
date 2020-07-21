import pokemonData from './data/pokemon.js';
import { getRandomPokemon } from './common/utils.js';

const catchButton = document.getElementById('catch-button');
const radioButtons = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
let randomPokemon0 = getRandomPokemon(pokemonData);
let randomPokemon1 = getRandomPokemon(pokemonData);
let randomPokemon2 = getRandomPokemon(pokemonData);
let caughtArray = [];
let encounteredArray = [];

// //initialize state
//for counter: let caughtPokemon = 0; let encounteredPokemon = 0;

//labels

const label0 = labels[0];
const input0 = label0.children[0];
const image0 = label0.children[2];
const span0 = label0.children[2];

input0.value = randomPokemon0.id;
image0.src = randomPokemon0.url_image;
span0.textContent = randomPokemon0.pokemon;

console.log(randomPokemon0);
//event listener

const label1 = labels[1];
const input1 = label1.children[0];
const image1 = label1.children[2];
const span1 = label1.children[2];

input1.value = randomPokemon1.id;
image1.src = randomPokemon1.url_image;
span1.textContent = randomPokemon1.pokemon;
//event listener

const label2 = labels[2];
const input2 = label2.children[0];
const image2 = label2.children[2];
const span2 = label2.children[2];

input2.value = randomPokemon2.id;
image2.src = randomPokemon2.url_image;
span2.textContent = randomPokemon2.pokemon;
//event listener

while (randomPokemon0.id === randomPokemon1.id || randomPokemon0 === randomPokemon2.id || randomPokemon1.id === randomPokemon2.id) {
    randomPokemon0 = getRandomPokemon(pokemonData);
    randomPokemon1 = getRandomPokemon(pokemonData);
    randomPokemon2 = getRandomPokemon(pokemonData);
}
//add to encountered array and caught array

//add pokemon properties to html elements
input0.value = randomPokemon0.id;
image0.src = randomPokemon0.url_image;

input1.value = randomPokemon1.id;
image1.src = randomPokemon1.url_image;

input2.value = randomPokemon2.id;
image2.src = randomPokemon2.url_image;


// radioButtons.forEach((radioPokemon, i) => {
//     if (i === 0) {
//         radioPokemon.value = randomPokemon0.id;
//     } else if (i === 1) {
//         radioPokemon.value = randomPokemon1.id;
//     } else if (i === 2) {
//         radioPokemon.value = randomPokemon2.id;
//     }
// });
