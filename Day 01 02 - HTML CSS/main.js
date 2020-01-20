
//1
const maxCapacity = 14
let surfTime = true
let bestStudent
//const purposeInLife

console.log(maxCapacity)

//2
const myVariable = "The potential of the future " // notice the space we're leaving at the end

const result = myVariable + "is the best thing ever"

console.log(result) // logs "The potential of the future is the best thing ever"

//3
const password = "12345678"
const confirmPassword = "12345678"

console.log(password == confirmPassword) // prints false

//4
console.log(432*12)
console.log(802/2)
console.log((5+6)*3)

//5
console.log((52 !== "52")==true)

//conditions:
//1
let numChildren
let isCareful

//7

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if(currentYear - yearOfTeslaPurchase >= 4) {
      console.log("Would you like an upgrade?")
    }
    else {
      console.log("Are you satisfied with your purchase")
    }
  }
  else if (boughtTesla) {
    console.log("Would you like to move to the US?")
  }
  else if (!boughtTesla) {
    console.log("Are you interested in purchasing a Tesla?")
  }
