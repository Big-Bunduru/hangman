function game() {
    const wordCount = prompt("Enter word count:");
    const getPuzzle = async (wordCount) => {
        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        
        if (response.status === 200) {
            const data  = await response.json()
            const puzzleString = await data.puzzle.toLowerCase()
            console.log(puzzleString);
            const words = puzzleString.split(' ')
            const wordsArray = Array.from(puzzleString)
            console.log(words)
            for (i = 0; i < words.length; i++) {
                $('#main-game').append(`"<div class='word' id='word${i}'>"`)
                const word = wordArray[i]
                const wordArray = Array.from(word)
                $('#main-game').append(`"<div class='word' id='word${i}'>"`)
            }
            for (i = 0; i < puzzleString.length; i++) {
                if (wordsArray[i] === " ") {
                    $('#main-game').append("<div class='divSpace'></div><br>")
                } else {
                    $('#main-game').append("<div class='div'></div>")
                }
            }
            let lives = 7;
            $("header").text("Lives remaining: " + lives);
            $('body').keypress(function(event){ 
                var successFlag = false;
                if (lives > 0) {
                    for (i = 0; i < puzzleString.length; i++) {
                        if(event.keyCode == puzzleString.charCodeAt(i)){
                            $("body").find("div").eq(i).text(puzzleString[i]);
                            success_flag = true;
                        }
                    }
                    if (!successFlag) {
                        lives--;
                        $("header").text("Lives remaining: " + lives);
                    }
                } else if (lives == 0) {
                    $("header").text("Game Over    ");
                    $('header').append('<button>Reset</button>')
                    $("header").click(function(){
                        location.reload();
                    });
                }
             })
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }
    getPuzzle(wordCount)
}

$("button").click(function(){
    game();
});
