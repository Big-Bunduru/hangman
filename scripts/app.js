function game() {
    var word_count = prompt("Enter word count:");
    const getPuzzle = async (word_count) => {
        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${word_count}`)
        
        if (response.status === 200) {
            const data  = await response.json()
            var puzzle_string = await data.puzzle
            console.log(puzzle_string);
            var len = puzzle_string.length;
            for (i = 0; i < len; i++) {
                $('body').append("<div class='div'></div>").css('color', 'black');
            }
            var lives = 7;
            $("header").text("Lives remaining: " + lives);
            $('body').keypress(function(event){ 
                var success_flag = false;
                if (lives > 0) {
                    for (i = 0; i < len; i++) {
                        if(event.keyCode == puzzle_string.charCodeAt(i)){
                            $("body").find("div").eq(i).text(puzzle_string[i]);
                            success_flag = true;
                        }
                    }
                    if (!success_flag) {
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
    getPuzzle(word_count)
}

$("button").click(function(){
    game();
});
