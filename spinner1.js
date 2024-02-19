// Spinner 1 - Assignment:

// Let's get some practice with setTimeout by creating a low-fidelity loading spinner.

/*
  Using \r for Redrawing a Line:

  A problem we'll face right away when trying to "animate" on the terminal is that we'll
  need to draw a different character to the same part of the terminal.
  
  So far, we only know how to write characters or lines to stdout and in doing so we move
  the cursor forward. We need to somehow have our cursor return to the same spot in the
  output in order to rewrite that part.
  
  Thankfully, there are multiple ways to accomplish this, and we'll look at a very simple
  and limited approach.

  We can use the special character \r to return our cursor back to the beginning of the
  line that we were on. After this, anything we write next to stdout will overwrite the
  line.
*/

process.stdout.write('hello from spinner1.js... \rheyyy\n');

// Outputs: heyyy from spinner1.js...
// The first few characters are replaced by "heyyy". This is b/c \r brought or cursor back
// tot he beginning.

/*
  Leveraging \r and setTimeout for Spinner:

  Using this \r, we can fake an animation by replacing/rewriting characters in the same
  spot after a delay.

   - Type the following setTimeout statements in our file:
*/
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\r|  ');
}, 900);

/*
  How This Works:

   - Each character is a delayed write, using setTimeout.

   - With each delayed write, we start with returning the cursor to the beginning.

   - We then write the next character in the animation.

   - Spaces are added after the character so that the cursor moves far enough away from
     our animation.

   - Removing the space padding at the end of the strings will mean that the cursor will
    sit on top of the animation, making it harder to see.
*/



