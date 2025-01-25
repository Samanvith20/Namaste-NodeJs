console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("Promise 1");

    process.nextTick(() => {
      console.log("Next Tick inside Promise 1");
    });

    return Promise.resolve();
  })
  .then(() => {
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
//Next Tick 1
// Next Tick 2
// Promise 1
// Promise 2
// Next Tick inside Promise 1
