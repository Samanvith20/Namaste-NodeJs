console.log("Start");

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
