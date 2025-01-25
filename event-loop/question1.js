console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

console.log("End");

// Output: (Correct Answer)
// Start
// End
// timeout
// Immediate
