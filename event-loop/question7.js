console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise 1 inside Timeout");
  });

  setTimeout(() => {
    console.log("Timeout 2 inside Timeout");
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
});

process.nextTick(() => {
  console.log("Next Tick 1");

  process.nextTick(() => {
    console.log("Next Tick 2");
  });
});

console.log("End");


// Output:
// Start
// End
// Next Tick 1
// Next Tick 2
// Promise 2
//Timeout 1
// Promise 1 inside Timeout
// Timeout 2 inside Timeout
