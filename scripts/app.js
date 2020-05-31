// let wordCountHC = 2
// let puzzle22 = $.getJSON(`https://puzzle.mead.io/puzzle?wordCount=${wordCountHC}`)
// console.log(puzzle22.responseText)

function game() {
    
    // prompt for the number of words in puzzle
    const wordCount = prompt("Enter word count:");
    
    // fetch the puzzle from puzzle.mead.io
    const getPuzzle = async (wordCount) => {
        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        
        if (response.status === 200) {
            const data  = await response.json()
            
            // make puzzle lowercase
            const puzzleString = await data.puzzle.toLowerCase()
            console.log(puzzleString);
            // split string puzzle into an array of words
            const words = puzzleString.split(' ')
            console.log(words)
            console.log(words.length)
            
            // loop through each word in puzzle
            for (i = 0; i < words.length; i++) {
                // make a div for each word
                $('#main-game').append(`<div id='word${i}'>[Word]: </div>`)
                // loop through the letters in each word
                for (j = 0; j < words[i].length; j++) {
                    // append a span for each letter containing an underscore
                    $(`#word${i}`).append(`<span id='span${j}'> _ </span>`)
                }
            }

            let lives = 7;
            // display number of lives
            $("header").text("Lives remaining: " + lives);
            // remove new game button
            var element = document.getElementById("new-game");
            element.parentNode.removeChild(element);

            // main keypress logic
            $('body').keypress(function(event){
                let guesses = []
                // boolean flag if keystroke is in puzzle
                let successFlag = false;
                if (lives > 0) {

                    // loop through each word in puzzle
                    for (i = 0; i < words.length; i++) {
                        // select the div for that word
                        var wordDiv = document.getElementById(`word${i}`)
                        // loop though letters in each word
                        for (j = 0; j < words[i].length; j++) {
                            // condition if keystroke matches the letter_j of word_i
                            if(event.keyCode == words[i].charCodeAt(j)){
                                // select the span for that letter
                                wordDiv.querySelector(`#span${j}`).innerHTML = words[i][j]
                                // key stroke matches letter so flip boolean flag
                                successFlag = true;
                            }
                        }
                    }

                    // key stroke letter not found in puzzle
                    if (!successFlag) {
                        // decrement lives by 1
                        lives--;
                        // update lives count
                        $("header").text("Lives remaining: " + lives);
                    }
                // no remaining lives left
                } else if (lives == 0) {
                    // update header and add reset button
                    $("header").text("Game Over    ");
                    $('header').append('<button>Reset</button>')
                    $("header").click(function(){
                        // reload game
                        location.reload();
                    });
                }
            })
        
        // fetch unsuccessful
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }

    // call get puzzle function to start html request
    getPuzzle(wordCount)
}

$("button").click(function(){
    // new game clicked to start game
    game();
});
