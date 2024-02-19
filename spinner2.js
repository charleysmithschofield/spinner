// Spinner 2 - Assignment:

/*
  Refactor Challeng:

  Refactor the log to remove the repeated setTimeout statements.

  We should instead be left with much less code (about 8 to 10 lines of code).
*/

// Initialize a variable called spinnerChars and set it to an array of the symbols.
const spinnerChars = ['|', '/', '-', '\\', '|'];
// Initialize a variable called delay and set it to 100.
let delay = 100;

// Use a for..of loop to iterate through the spinnerChars array.
for (const char of spinnerChars) {
  // setTimeout
  setTimeout(() => {
    process.stdout.write(`\r${char}  `);
  }, delay);
  // add 200 ms to the delay
  delay += 200;
}