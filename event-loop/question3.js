console.log("Start");

setTimeout(() => {
  console.log("Outer Timeout");

  setTimeout(() => {
    console.log("Inner Timeout");
  }, 0);
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

console.log("End");


// Output:(Correct Answer)
// Start
// End
// Outer Timeout
// Immediate
// Inner Timeout