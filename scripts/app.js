var word_count = prompt("Enter word count:")

const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const puzzle  = await response.json()
        console.log(puzzle.puzzle)
        console.log(puzzle.puzzle.length)
        return puzzle.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const render = async (wordCount) => {
    const puzzle = getPuzzle(wordCount).then((fetchedPuzzle) => {
            var puzzleString = JSON.stringify(fetchedPuzzle)
            return puzzleString
        }).then((puzzleString) => {
            var len = puzzleString.length
            console.log(len)
            return len
        }).then((len) => {
            for (i = 0; i < len; i++) {
                $('body').append("<div class='div'></div>").css('color', 'black')
                //console.log(keyword[i])
                //console.log(keyword.charCodeAt(i))
            }
            return len
        })
    console.log(puzzle)

    var lives = 7

    $('body').keypress(function(event){ 
        var success = false
        //console.log(event.keyCode)
        if (lives > 0) {
            for (i = 0; i < len; i++) {
                if(event.keyCode == keyword.charCodeAt(i)){
                    $("body").find("div").eq(i).text(keyword[i])
                    success = true
                }
                //console.log(keyword.charCodeAt(i))
            }
            if (!success) {
                lives--
                $("header").text("Lives remaining: " + lives)
            }
        }
     })
}

render(word_count)



// This is the container for the actual game itself. 
// In other words, this is where we set up the interface and read
// user inputs/interactions. 