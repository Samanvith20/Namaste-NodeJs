console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  setImmediate(() => {
    console.log("Immediate inside Timeout 1");

    setTimeout(() => {
      console.log("Timeout inside Immediate");
    }, 0);
  });

  process.nextTick(() => {
    console.log("Next Tick inside Timeout 1");
  });
}, 0);

setImmediate(() => {
  console.log("Immediate 1");

  setTimeout(() => {
    console.log("Timeout inside Immediate 1");
  }, 0);
});

console.log("End");


// Start
// End
// Timeout 1
// Next Tick inside Timeout 1
// Immediate 1
// Immediate inside Timeout 1
// Timeout inside Immediate 1
// Timeout inside Immediate