// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length is a built in method that determines the number of elements in a string/array (including spaces).

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: 'o'
// b) Verify and explain: the character at the fourth index is the letter 'o,' since strings are 0 indexed.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: 'Ruby'
// b) Verify and explain: the element at the '1' index is "Ruby" since arrays are 0 indexed.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: error
// b) Verify and explain: 'TypeError: weekendDays.toUpperCase is not a function.' toUpperCase() is a string method, does not work with arrays

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: error, typeof without the () is not recognized byt the interpreter, the correct syntax is: console.log(typeof(dataTypes.length)), which should log 'number,' since the .length method returns a number.
// b) Verify and explain: number. I was not aware that was the correct syntax of typeof.
