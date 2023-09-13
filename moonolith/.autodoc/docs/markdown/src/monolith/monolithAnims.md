[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/monolith/monolithAnims.js)

The code provided is a part of the Moonolith project and is responsible for animating the monolith display. The monolith display is a grid of pixels represented by the `monolith` array. The purpose of this code is to animate different transitions and effects on the monolith display.

The code begins by importing necessary constants and modules from other files in the project. It also exports some variables and functions to be used in other parts of the project.

The `animateMonolith` function is the main function that triggers the animation of the monolith. It iterates over the `chunksToAnimateInfo` object, which contains information about the chunks of the monolith that need to be animated. For each chunk, it checks if it is currently visible on the screen and calls the `animateRune` function to animate the chunk.

The `animateRune` function is responsible for animating a specific chunk of the monolith. It first checks if the chunk has already been animated before. If not, it retrieves the rune data for the chunk from the `chunksToAnimateInfo` object. It then iterates over the rune data and adds the pixels to the `animatedPixels` map with the transition type set to 'import'. This triggers the animation of the pixels with the specified color.

After a delay of 1600 milliseconds, the function proceeds to animate the white color on the rune. It iterates over the pixels within the rune's boundaries and adds them to the `animatedPixels` map with the transition type set to 'whiteOnRune'. The counter value determines the speed of the animation.

Next, the function animates the rune contour by iterating over the pixels within the rune's boundaries and adding the neighboring pixels to the `animatedPixels` map with the transition type set to 'runeContour'. This creates a contour effect around the rune.

The `draw` function is a helper function that updates the color of a pixel in the `monolith` array.

The `endTransition` function is a helper function that ends the transition of a pixel by updating its color in the `monolith` array and removing it from the `animatedPixels` map.

The `avg` function is a helper function that calculates the average color between two colors.

Overall, this code is responsible for animating different transitions and effects on the monolith display. It is used in the larger Moonolith project to create dynamic and visually appealing animations on the monolith.
## Questions: 
 1. What is the purpose of the `animateMonolith` function?
- The `animateMonolith` function triggers different animations on the `monolith` based on the values in the `animatedPixels` map.

2. What is the purpose of the `animateRune` function?
- The `animateRune` function is called to animate a specific rune on the `monolith`. It sets up different animations for the rune, such as displaying the rune, adding a white overlay, and drawing the rune's contour.

3. What is the purpose of the `endTransition` function?
- The `endTransition` function is called to finalize an animation transition on a specific pixel. It sets the pixel's color to the final color and removes it from the `animatedPixels` map.