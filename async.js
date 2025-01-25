// conatins both synchronous and asynchronous code
 const https=require('https')
 const fs=require('fs')


const a=40
const b=60

// api call
https.get("https://jsonplaceholder.typicode.com/posts",(response)=>{
    let data=""
    response.on("data",(chunk)=>{
        data+=chunk
    })
    response.on("end",()=>{
        // console.log("Data::",JSON.parse(data))
        console.log("End")
    })
})

console.log("hello world")

// file read
fs.readFile("read.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error::",err)
    }
    console.log("Data::",data)
})

console.log("file read")

// timeout

setTimeout(()=>{
    console.log("Timeout")
},0)

function multiply(a,b){
    return a*b
}

const multiplicationOfTwoNumbers=multiply(a,b)
console.log("multiplication of two numbers::",multiplicationOfTwoNumbers)