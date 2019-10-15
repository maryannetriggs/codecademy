const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 9
      break;
    case 'saturday':
      return 9
      break;
    case 'sunday':
      return 8
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  const sleepDifference = Math.abs(actualSleepHours - idealSleepHours)
  if (actualSleepHours === idealSleepHours) {
    console.log('Congratulations, you got enough sleep this week!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' +  sleepDifference + ' hours more sleep than you needed this week.')
  } else {
    console.log('You got ' + sleepDifference + ' hours sleep less than you needed this week, take a rest.')
  }
}

calculateSleepDebt()

//console.log(getIdealSleepHours());




