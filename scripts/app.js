var word_count;

$("button").click(function(){
    word_count = prompt("Enter word count:");
});

//var keyword = prompt("Enter: Hangman word");
//var len = keyword.length;
//var lives = 7
//console.log(len)

for (i = 0; i < len; i++) {
    $('body').append("<div class='div'></div>").css('color', 'black');
    //console.log(keyword[i])
    //console.log(keyword.charCodeAt(i))
}


$('body').keypress(function(event){ 
    var success = false;
    //console.log(event.keyCode)
    if (lives > 0) {
        for (i = 0; i < len; i++) {
            if(event.keyCode == keyword.charCodeAt(i)){
                $("body").find("div").eq(i).text(keyword[i]);
                success = true;
            }
            //console.log(keyword.charCodeAt(i))
        }
        if (!success) {
            lives--;
            $("header").text("Lives remaining: " + lives);
        }
    }
 })



// This is the container for the actual game itself. 
// In other words, this is where we set up the interface and read
// user inputs/interactions. 

const gameElement = document.querySelector('#main-game')

const render = () => {
    // render a blank game to the gameElement
    gameElement.textContent = ''
    
    // display the puzzle letter by letter
    //  
}
