console.log("Start");

process.nextTick(() => {
  console.log("Next Tick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

//output(Correct Answer)
// Start
// End
// Next Tick
// Promise