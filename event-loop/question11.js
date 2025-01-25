const fs = require("fs");

console.log("Start");

fs.readFile("read.txt","utf8", () => {
  console.log("File Read Callback");

  setImmediate(() => {
    console.log("Immediate inside File Read");

    process.nextTick(() => {
      console.log("Next Tick inside Immediate inside File Read");
    });
  });

  process.nextTick(() => {
    console.log("Next Tick inside File Read");
  });

  setTimeout(() => {
    console.log("Timeout inside File Read");
  }, 0);
});

process.nextTick(() => {
  console.log("Next Tick 1");
});

setImmediate(() => {
  console.log("Immediate 1");
});

console.log("End");

// Start
// End
// Next Tick 1
// File Read Callback
// Next Tick inside File Read
// Immediate 1
// Immediate inside File Read
// Next Tick inside Immediate inside File Read
// Timeout inside File Read