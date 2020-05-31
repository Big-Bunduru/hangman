const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data  = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

getPuzzle(2).PromiseValue

console.log(getPuzzle(2))

// const endpoint = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Hello&format=json&origin=*";
// fetch(endpoint).then(blob => console.log(blob.json()));

// I'm using a puzzle generator set up by Andrew Mead for his JSBC course
// 
// This fn creates an async function called "getPuzzle" which takes "wordCount" 
// (i.e. the number of words in the puzzle) as the single argument.
// 
// The variable "response" awaits a fetch command from the API which passes in
// "wordCount" as a jQuery parameter.
//
// If the response status is 200 (i.e. all good) then the response is stored as
// json data to the variable "data." The property "puzzle" is called from the json
// data and returned. If the status is not 200, then an error is thrown. 
//