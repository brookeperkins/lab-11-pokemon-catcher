import pokemonData from './data/pokemon.js';
import { getRandomPokemon, findByName } from './common/utils.js';

let catches = 0;
let pokeDataArray = [];

const labels = document.querySelectorAll('label');
const catchButton = document.querySelector('#catch-button');
// const resultSpan = document.querySelector('#catches-span');

function setPage() {
    let randomPokemon0 = getRandomPokemon(pokemonData);
    let randomPokemon1 = getRandomPokemon(pokemonData);
    let randomPokemon2 = getRandomPokemon(pokemonData);

    while (randomPokemon0.id === randomPokemon1.id || randomPokemon0 === randomPokemon2.id || randomPokemon1.id === randomPokemon2.id) {
        randomPokemon1 = getRandomPokemon(pokemonData);
        randomPokemon2 = getRandomPokemon(pokemonData);
    }

    const label0 = labels[0];

    const input0 = label0.children[1];
    input0.addEventListener('click', eventHandler);
    const image0 = label0.children[2];
    const span0 = label0.children[2];
    input0.value = randomPokemon0.id;
    image0.src = randomPokemon0.url_image;
    span0.textContent = randomPokemon0.pokemon;

    const label1 = labels[1];

    const input1 = label1.children[1];
    input1.addEventListener('click', eventHandler);
    const image1 = label1.children[2];
    const span1 = label1.children[2];
    input1.value = randomPokemon1.id;
    image1.src = randomPokemon1.url_image;
    span1.textContent = randomPokemon1.pokemon;

    const label2 = labels[2];

    const input2 = label2.children[1];
    input2.addEventListener('click', eventHandler);
    const image2 = label2.children[2];
    const span2 = label2.children[2];
    input2.value = randomPokemon2.id;
    image2.src = randomPokemon2.url_image;
    span2.textContent = randomPokemon2.pokemon;

}

function eventHandler(e) {
    catches++;

    const clickedPokemon = e.target.value;
    const caughtPokemon = findByName(pokemonData, clickedPokemon);

    // resultSpan.textContent = 'Caught a wild ' + caughtPokemon.pokemon;
    // console.log(catches);
}

if (catches < 10){
    catchButton.addEventListener('click', setPage);
} else {
    catchButton.addEventListener('click', () => {
        window.location.href = './results.html';
    });
}

setPage();