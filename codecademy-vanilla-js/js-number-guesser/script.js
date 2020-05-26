let humanScore = 0
let computerScore = 0
let currentRoundNumber = 1

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanGuessDifference = Math.abs(humanGuess - targetNumber)
  const computerGuessDifference = Math.abs(computerGuess - targetNumber)
  if (humanGuessDifference === computerGuessDifference) {
    return true
  } else if (humanGuessDifference > computerGuessDifference) {
    return false
  } else if (humanGuessDifference < computerGuessDifference) {
    return true
  }
}

const updateScore = whoWins => {
  if (whoWins === 'human') {
    humanScore += 1
  } else if (whoWins === 'computer') {
    computerScore += 1
  }
}

const advanceRound = () => {
  currentRoundNumber += 1
}

// console.log(generateTarget());
