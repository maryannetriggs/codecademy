const raceNumber = Math.floor(Math.random() * 1000)

let earlyOrLate = false

let runnerAge = 18

if (earlyOrLate && runnerAge > 18)
  console.log(raceNumber + 1000)

if (earlyOrLate === true && runnerAge > 18) {
  console.log(`Dear runner, your race number is ${raceNumber + 1000} and the race will begin at 9:30am.`)
	} else if (earlyOrLate !== true && runnerAge > 18) {
  console.log(`Dear runner, your race number is ${raceNumber} and the race will begin at 11:00am.`)
} else if (runnerAge < 18) {
  console.log(`Dear runner, your race number is ${raceNumber} and the race will begin at 12:30am.`)
} else {
  console.log('Please visit the registration desk for instructions.')
}