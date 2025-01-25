console.log("Start");

async function asyncFunction() {
  console.log("Async Function Start");

  await Promise.resolve().then(() => {
    console.log("Promise inside Async");
  });

  console.log("Async Function End");
}

asyncFunction();

Promise.resolve().then(() => {
  console.log("Promise 1");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");

// Start
// Async Function Start
// End
// Next Tick
// Promise inside Async
// Promise 1
// Async Function End