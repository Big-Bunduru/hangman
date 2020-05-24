function game() {
    const wordCount = prompt("Enter word count:");
    const getPuzzle = async (wordCount) => {
        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        
        if (response.status === 200) {
            const data  = await response.json()
            const puzzleString = await data.puzzle.toLowerCase()
            console.log(puzzleString);
            const words = puzzleString.split(' ')
            console.log(words)
            console.log(words.length)
            for (i = 0; i < words.length; i++) {
                $('#main-game').append(`<div class='word' id='word${i}'>My row</div>`)
                const words = wordArray[i];
                const wordArray2 = Array.from(words);
            }

            for (i = 0; i < words.length; i++) {
                $('#main-game').append(`<div class='word' id='word${i}'>Our row: </div>`)
                for (j = 0; j < words[i].length; j++) {
                    $(`#word${i}`).append("<span class='div'></span>")
                }
            }

            let lives = 7;
            $("header").text("Lives remaining: " + lives);
            $('body').keypress(function(event){ 
                let successFlag = false;
                if (lives > 0) {
                    for (i = 0; i < puzzleString.length; i++) {
                        if(event.keyCode == puzzleString.charCodeAt(i)){
                            $("#main-game").find("span").eq(i).text(puzzleString[i]);
                            successFlag = true;
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
