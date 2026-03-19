//Numbers Game Logic  

// Intialize Variables and getting elements
let score = 0
let randomNumber = generateRandomNumber()
let userNumber;
let gameCard = document.getElementById('game-card')
let userInput = document.getElementById('guess')
let resultText = document.getElementById('result')
let scoreText = document.getElementById('scores')
let highScoreText = document.getElementById('high-score') // Get access to the DOM  element

let highScore = localStorage.getItem('numberGameHighScore') || 0; // Get highscore
highScoreText.innerHTML = highScore;


function checkNumber() {



    //Getting the input value
    userNumber = userInput.valueAsNumber 
    console.log(userNumber)

    if (!userNumber && userNumber !== 0) {
        alert('Choose a valid number')
    } 
    
    

    displayActionButtons()
    if (userNumber == randomNumber) {
        //The user has earned a point
        score += 1
        scoreText.innerHTML = score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('numberGameHighScore', highScore);
            highScoreText.innerHTML = highScore;
        }
        resultText.innerHTML = `Correct, the number is ${randomNumber}`
        gameCard.style.display = 'none'
        
    } else if (userNumber !== randomNumber) {
        if (userNumber < randomNumber) {
            resultText.innerHTML = `Wrong, go higher`

        } else {
            resultText.innerHTML = `Wrong, go lower`
        }
    } 
}

function displayActionButtons() {
    let actionSection = document.getElementById('action-section')
    actionSection.style.display = 'flex'
}


function gameAction (type = 'restart') {
    if (type == 'restart') {
        gameCard.style.display = 'block'
        randomNumber = generateRandomNumber()
    } else if (type === 'reset') {
        gameCard.style.display = 'block'
        randomNumber = generateRandomNumber()
        score = 0
        scoreText.innerHTML = score
        resultText.innerHTML = 'Make your first guess!'
        userInput.value = "";
    }
    
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
}