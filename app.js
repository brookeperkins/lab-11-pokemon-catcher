import pokemonData from './data/pokemon.js';
import { getRandomPokemon } from './common/utils.js';

// const catchButton = document.getElementById('catch-button');
const radioButtons = document.querySelectorAll('input');
let randomPokemon0 = getRandomPokemon(pokemonData);
let randomPokemon1 = getRandomPokemon(pokemonData);
let randomPokemon2 = getRandomPokemon(pokemonData);
// let caughtArray = [];
// let encounteredArray = [];

// //initialize state
// let caughtPokemon = 0;
// let encounteredPokemon = 0;

//labels
const labels = document.querySelectorAll('label');

const label0 = labels[0];
const input0 = label0.children[0];
const image0 = label0.children[1];
const span0 = label0.children[2];

input0.value = randomPokemon0.id;
image0.src = randomPokemon0.url_image;
span0.textContent = randomPokemon0.pokemon;
//event listener

const label1 = labels[1];
const input1 = label1.children[0];
const image1 = label1.children[1];
const span1 = label1.children[2];

input1.value = randomPokemon1.id;
image1.src = randomPokemon1.url_image;
span1.textContent = randomPokemon1.pokemon;
//event listener

const label2 = labels[2];
const input2 = label2.children[0];
const image2 = label2.children[1];
const span2 = label2.children[2];

input2.value = randomPokemon2.id;
image2.src = randomPokemon2.url_image;
span2.textContent = randomPokemon2.pokemon;
//event listener

let pokemonTrio = [];

while (randomPokemon0.id === randomPokemon1.id || randomPokemon0 === randomPokemon2.id || randomPokemon1.id === randomPokemon2.id); {
    let randomPokemon0 = getRandomPokemon(pokemon);
    let randomPokemon1 = getRandomPokemon(pokemon);
    let randomPokemon2 = getRandomPokemon(pokemon);
    
    pokemonTrio.push(randomPokemon0, randomPokemon1, randomPokemon2);
}
//add to encountered array and caught array

//add pokemon properties to html elements
input0.value = pokemonTrio[0].id;
image0.src = pokemonTrio[0].url_image;

input1.value = pokemonTrio[1].id;
image1.src = pokemonTrio[1].url_image;

input2.value = pokemonTrio[2].id;
image2.src = pokemonTrio[2].url_image;


radioButtons.forEach((radioPokemon, i) => {
    if (i === 0) {
        radioPokemon.value = pokemonTrio[0].id;
    } else if (i === 1) {
        radioPokemon.value = pokemonTrio[1].id;
    } else if (i === 2) {
        radioPokemon.value = pokemonTrio[2].id;
    }
});
