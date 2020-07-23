import {
    getPokeCart,
    clearPokeCart,
    mungeNames,
    mungeCaptured,
    mungeEncountered,
} from '../results/results-utils.js';

const ctx = document.getElementById('chart').getContext('2d');

const pokemonData = getPokeCart();
const mungedNames = mungeNames(pokemonData);
const mungedCaptured = mungeCaptured(pokemonData);
const mungedEncountered = mungeEncountered(pokemonData);

const restartButton = document.getElementById('restart-button');

const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: mungedNames,
        datasets: [{
            label: 'Pokemon Captured',
            data: mungedCaptured,
            backgroundColor:
                'white',
            borderColor:
                'white',
            borderWidth: 1
        },
        {
            label: 'Pokemon Encountered',
            data: mungedEncountered,
            backgroundColor: 
                'rgb(255,250,205)',
            borderColor: 
                'rgb(255,250,205)',
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


restartButton.addEventListener('click', () => {
    clearPokeCart();
    window.location = '../home-index.html';

});