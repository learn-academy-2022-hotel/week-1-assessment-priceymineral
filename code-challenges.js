// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

// input - one number
// output - one string indicating the state of the water

// create a fn that takes in a number argument corresponding temperature
const isBoiling = (temperature) => {
    // create a statement variable, initialize to empty string
    let stateOfWater = ''
    // if water above bp
    if (temperature > 212) {
        // reassign statement variable according to the instructions
        stateOfWater = `${temperature} is -ABOVE- boiling point`
        // if water is at boiling point 
    } else if (temperature === 212) {
        stateOfWater = `${temperature} is -AT- boiling point`
        // reassign statement variable according to the instructions
        // else 
    } else {
        // reassign statement variable according to the instructions
        stateOfWater = `${temperature} is -BELOW- boiling point`
    }

    // return statement
    return stateOfWater
}

console.log(isBoiling(temp1))
console.log(isBoiling(temp2))
console.log(isBoiling(temp3))



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// create a function that takes two arrays as arguments
const combinedLength = (arr1, arr2) => {
    // combine the two and store in a variable
    let combinedArray = arr1.concat(arr2)

    // return the length of the combined array
    return combinedArray.length
}

console.log(combinedLength(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

// create a fn that takes one argument, a string
const reverseString = (str) => {
    // convert str to array
    let strToArr = str.split("")
    // reverse the array
    let arrReversed = strToArr.reverse()
    // convert to str
    let strReversed = arrReversed.join("")

    // return newest version of str
    return strReversed
}

console.log(reverseString(currentCohort))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8



// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
