//Numbers Game Logic  

// Intialize Variables 
let score = 0
let randomNumber = Math.floor(Math.random() * 11);
let userNumber;

function checkNumber() {
    //Getting the input element
    let userInput = document.getElementById('guess')
    let resultText = document.getElementById('result')
    let scoreText = document.getElementById('scores')

    //Getting the input value
    userNumber = userInput.valueAsNumber 
    console.log(userNumber)

    if (!userNumber && userNumber !== 0) {
        alert('Choose a valid number')
    }   

    if (userNumber == randomNumber) {
        //The user has earned a point
        score += 1
        scoreText.innerHTML = score
        resultText.innerHTML = `Correct, the number is ${randomNumber}`
        
    } else if (userNumber !== randomNumber) {
        if (userNumber < randomNumber) {
            resultText.innerHTML = `Wrong, go higher`

        } else {
            resultText.innerHTML = `Wrong, go lower`
        }
    } 
}