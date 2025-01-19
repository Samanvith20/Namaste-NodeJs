// use the require function(Inbulit in nodejs) to import the module

const addition=require("./calculate/addition")
const subtract=require("./calculate/subtract")
const multiply=require("./calculate/multipy")

// another way of importing the module
// const {addTwoNumbers}=require("./calculate/addition")

const a=30
const b=20
const additionOfTwoNumbers=addition.addTwoNumbers(a,b)
const subtractionOfTwoNumbers=subtract.subtract(a,b)
const multiplicationOfTwoNumbers=multiply.multiply(a,b)
console.log("addition of two numbers::",additionOfTwoNumbers)
console.log("subtraction of two numbers::",subtractionOfTwoNumbers)
console.log("multiplication of two numbers::",multiplicationOfTwoNumbers)



// let name="Samanvith"
//  let MyAge=22

//  console.log(`My name is ${name} and my age is ${MyAge}`)
//  console.log("globalObject In NodeJs::",global)
 // Another way of global object called used in all js engines
    // console.log("globalObject In NodeJs::",globalThis)