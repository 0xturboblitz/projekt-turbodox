[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/monolith/tools.js)

The code provided is a module that contains various functions and variables related to a drawing tool in the Moonolith project. The purpose of this code is to handle user interactions with the drawing tool, such as selecting the brush size, picking colors, and drawing pixels on a canvas.

The code begins by importing various dependencies and constants from other files in the project. It then initializes some variables, including the current tool (defaulting to 'smol'), the colors picked by the user, and the color numbers associated with those colors.

The `startUsingTool` function is the main entry point for using the drawing tool. It takes in a mouse event and the current mouse position. If the middle mouse button is pressed, it calls the `colorPicker` function to pick a color based on the mouse position. Otherwise, it sets the `button` variable to the button that was pressed and calls the `useTool` function. It also sets up event listeners for mouse movement and mouse release.

The `useTool` function is responsible for actually drawing pixels on the canvas based on the current tool, color, and mouse position. It first determines the color and zIndex (used for layering) based on the current button and color picked. It then converts the mouse position to the appropriate format and checks if it is valid. Depending on the current tool, it uses nested loops to draw pixels in different patterns on the canvas.

The `brushSwitch` function is called when the user wants to switch between different brush sizes. It plays a sound effect and updates the current tool accordingly.

The `selectBrush` function is called when the user wants to directly select a specific brush size. It updates the current tool accordingly.

The `colorPicker` function is called when the user wants to pick a color from the canvas. It retrieves the color at the specified mouse position and compares it to the available colors in the palette. If a match is found, it calls the `colorSwitch` function to update the picked colors.

The `colorSwitch` function is called when the user wants to switch between the two picked colors. It updates the color numbers and picked colors based on the button pressed and the selected color.

Overall, this code provides the functionality for the drawing tool in the Moonolith project. It allows users to select different brush sizes, pick colors, and draw pixels on a canvas. The code can be used in conjunction with other modules and components to create a complete drawing application.
## Questions: 
 1. What does the `startUsingTool` function do and how is it triggered?
- The `startUsingTool` function is triggered by a mouse event. It checks if the mouse button is the middle button and if so, it calls the `colorPicker` function. Otherwise, it sets the `button` variable to the value of the mouse button and calls the `useTool` function. It also sets up event listeners for mouse movement and mouse release.

2. What does the `useTool` function do and how does it determine the color and zIndex?
- The `useTool` function is called when the mouse is moved while a tool is being used. It determines the color to be used based on the value of the `button` variable (0 for `colorPicked1` and any other value for `colorPicked2`). The zIndex is determined based on whether the color is the default color or not.

3. What does the `brushSwitch` function do and how does it update the tool?
- The `brushSwitch` function is called when the brush switch button is clicked. It plays a sound and updates the tool based on its current value. If the current tool is 'smol', it changes it to 'medium'. If the current tool is 'medium', it changes it to 'large'. If the current tool is 'large' or 'giga', it changes it back to 'smol'. It also calls the `updatePalette` function.