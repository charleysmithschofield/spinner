# Spinner 1 

## Purpose of Spinner 1:

The purpose of Spinner 1 is to get more practice with setTimeout, by creating a low-fidelity loading spinner.

We will accomplish this by leveraging \r and setTimeout for spinner1.

## How this Works:
 How This Works:

   - Each character is a delayed write, using setTimeout.

   - With each delayed write, we start with returning the cursor to the beginning.

   - We then write the next character in the animation.

   - Spaces are added after the character so that the cursor moves far enough away from
     our animation.

   - Removing the space padding at the end of the strings will mean that the cursor will
    sit on top of the animation, making it harder to see.


