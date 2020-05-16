const fs = require('fs')
const wordListPath = require('word-list')
const prompt = require('prompt')

// Program selects a random word from the word-list library (274411 words total)
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')
const wordIndex = Math.floor(Math.random() * 274411)
const wordSelected = wordArray[wordIndex]

// Variables to set the word and track guesses
const word = Array.from('secrets')
var tracker = []
for (i = 0; i < word.length; i++) {
    tracker += '__ '
  } 
var guess = 's'
console.log(word)


console.log(word.length + ' total letters')
console.log(tracker)

// Checks letter guess against word and provides result
if (word.includes(guess)) {
    console.log('Good guess, ya dickhead')
    var index = word.indexOf(guess)
    console.log(index)
    }
else {
    console.log('not quite, keep guessing')
}

console.log(tracker)



// prompt.start()
// prompt.get(['word'], async, function (err, result) {
//     await guess = result.word
// })

// console.log(guess)

// var guess = prompt("Enter your guess, ya jabroni: ")
// console.log(guess)


//console.log('binky the bun')