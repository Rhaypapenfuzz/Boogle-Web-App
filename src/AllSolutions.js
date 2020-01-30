import RandomGrid from './RandomGrid.js';
let grid = RandomGrid();
let allWords = new HashMap();
allWords = makeHashMap();
var wordListJson = require('./full-wordlist.json'); 

window.allSolutions = [];

function checkGuess(guess){

 let isWordValid = boggle_solver(grid, guess.toUpperCase());

}