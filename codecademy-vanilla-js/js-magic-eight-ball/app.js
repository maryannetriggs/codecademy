//User name is entered here
const userName = 'Mary-Anne';

//Game greeting
userName ? console.log('Hello, ' + (userName)) : console.log('Hello!')

//User question is entered and printed here
let userQuestion = 'Will the kids tidy their bedroom tonight?';

console.log(`${userName} asked the magic eight ball: ${userQuestion}'`)

//Random number generator
let randomNumber = Math.floor(Math.random() * 8)

//Magic eight ball variable
let eightBall = '';

//Assigning a magic eight ball response based on random number generation
switch (randomNumber){
  case 0:
    console.log('It is certain')
    break;
  case 1:
    console.log('It is decidedly so')
    break;
  case 2:
    console.log('Reply hazy try again')
    break;
  case 3:
    console.log('Cannot predict now')
    break;
  case 4:
    console.log('Do not count on it')
    break;
  case 5:
    console.log('My sources say no')
    break;
  case 6:
    console.log('Outlook not so good')
    break;
  case 7:
    console.log('Signs point to yes')
    break;
}

//Prints magic eight ball answer
console.log(eightBall)