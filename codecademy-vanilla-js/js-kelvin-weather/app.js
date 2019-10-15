// Degrees in Kelvin
const kelvin = 0
// Converting Kelvin into Celsius
const celsius = kelvin - 273
// Converting Celsius into Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32
// Converting Celsius into Newtons
let newton = celsius * (33 / 100)
newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton`)