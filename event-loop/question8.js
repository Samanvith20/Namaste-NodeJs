const fs = require("fs");

console.log("Start");

fs.readFile("read.txt","utf8", () => {
  console.log("File Read Callback");

  setTimeout(() => {
    console.log("Timeout inside File Read");
  }, 0);

  setImmediate(() => {
    console.log("Immediate inside File Read");
  });

  process.nextTick(() => {
    console.log("Next Tick inside File Read");
  });
});

setImmediate(() => {
  console.log("Immediate");
});

console.log("End");

// Output:
// Start
// End
// Immediate
// File Read Callback
//Next Tick inside File Read
// Immediate inside File Read
// Timeout inside File Read
