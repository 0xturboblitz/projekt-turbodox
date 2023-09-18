[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/blob/master/src/display/animations.js)

This code is responsible for managing animations in the Moonolith project. It imports various assets and constants, and defines an animation catalog (`animCatalog`) that contains information about each animation, such as its type, start position, whether it should be displayed and looped, its layer, and its base64 representation.

The `animFrameManager` function manages the frames of a given animation. It checks if the animation is of type 'intro' and if the intro state is false, it sets the display of the animation to false. It then sets a timeout to update the current frame of the animation. If the animation is set to loop, it resets the current frame to 0 and calls `animFrameManager` again.

The `launchAnim` function sets the display of a given animation to true and calls `animFrameManager` to start managing its frames.

The `updateAnimCatalog` function updates the x and y positions of each animation in the catalog based on the current view position and other constants. It also adjusts the positions of the 'postMonolith' and 'autourDuFeu' animations.

The `drawAnimations` function draws the current frame of each animation in the catalog that is set to display and is on the given layer. It calls the `drawFrame` function to draw each frame.

The `drawFrame` function creates an image data object from the current frame of the given animation and draws it on the animation's canvas. It then draws the animation's canvas on the given context at the animation's current position.

The `loadAnims` function initializes each animation in the catalog. It creates a canvas for each animation, sets its width and height, sets its parallax based on its layer, and sets its current frame to 0. If the animation is of type 'continual', it launches the animation. It also adjusts the start y position of the 'collision' animation.
