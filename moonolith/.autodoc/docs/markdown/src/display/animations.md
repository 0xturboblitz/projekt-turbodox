[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/display/animations.js)

The code provided is part of the Moonolith project and is responsible for managing and displaying animations within the project. 

The `animCatalog` object is an inventory of all the animations available in the project. Each animation is represented by a key-value pair, where the key is the name of the animation and the value is an object containing various properties of the animation. These properties include the type of animation (intro, continual, onMouse, postIntro), the starting position of the animation, whether it should be displayed or not, whether it should loop or not, the layer it belongs to, and the base64 encoded image data for the animation.

The `animFrameManager` function is responsible for managing the frames of an animation. It takes an animation name as input and retrieves the corresponding animation object from the `animCatalog`. If the animation type is 'intro' and the `introState` is false, the display property of the animation is set to false. The function then checks the current frame of the animation and determines whether to advance to the next frame, restart the animation from the beginning, or stop the animation based on the loop property. The delay between frames is determined by the delay array of the animation object.

The `launchAnim` function is used to start an animation. It takes an animation name as input, sets the display property of the animation to true, and calls the `animFrameManager` function to start managing the frames of the animation.

The `updateAnimCatalog` function is responsible for updating the position of the animations based on the view position and the parallax effect. It iterates over all the animations in the `animCatalog` and calculates the new x and y positions based on the view position and the parallax offset. It also adjusts the position for specific animations ('postMonolith' and 'autourDuFeu') by subtracting the height of the monolith lines and adding margin values.

The `drawAnimations` function is responsible for drawing the animations on the canvas. It takes a canvas context and a layer number as input. It iterates over all the animations in the `animCatalog` and checks if the animation belongs to the specified layer and if it should be displayed. If both conditions are met, it calls the `drawFrame` function to draw the current frame of the animation on the canvas.

The `drawFrame` function takes a frame, animation name, and canvas context as input. It retrieves the animation object from the `animCatalog` based on the animation name and creates an image data object for the frame. It then draws the frame on the animation's canvas and finally draws the animation's canvas on the main canvas using the x and y positions of the animation.

The `loadAnims` function is responsible for initializing the animations. It iterates over all the animations in the `animCatalog` and creates a canvas element for each animation. It sets the width and height of the canvas based on the animation's dimensions. It also sets the parallax value and current frame to their initial values. If the animation type is 'continual', it calls the `launchAnim` function to start the animation. Additionally, for the 'collision' animation, it adjusts the starting y position based on the render height.

Overall, this code provides a framework for managing and displaying animations in the Moonolith project. It allows for the creation and customization of various types of animations and provides functions for starting, updating, and drawing the animations on the canvas.
## Questions: 
 1. What is the purpose of the `animCatalog` object?
- The `animCatalog` object stores information about different animations, including their type, position, display status, and base64 image data.

2. What is the role of the `animFrameManager` function?
- The `animFrameManager` function manages the frames of an animation by updating the current frame and determining whether to continue to the next frame, loop back to the first frame, or stop the animation.

3. How are the animations drawn on the canvas?
- The `drawAnimations` function iterates through the `animCatalog` object and draws the current frame of each animation on the canvas using the `drawFrame` function.