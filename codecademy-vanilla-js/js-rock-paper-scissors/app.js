// getting user choice for game
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Error! please enter Rock, Paper or Scissors')
  }
}

// getting computer input for game
const getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return 'rock'
  } else if (randomNumber === 1) {
    return 'paper'
  } else if (randomNumber === 2) {
    return 'scissors'
  }
}

// determining winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'War is never the answer. Noone wins'
  }
  if (userChoice === computerChoice) {
    return 'Game is a tie!'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins!'
    } else if (computerChoice === 'scissors') {
      return 'The user wins!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'The user wins!'
    } else if (computerChoice === 'scissors') {
      return 'The computer wins!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins!'
    } else if (computerChoice === 'paper') {
      return 'The user wins!'
    }
  }
}

// game play
const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log('You threw ' + userChoice)
  console.log('The computer threw ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()