[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/blob/master/src/monolith/tools.js)

The code in this file is primarily responsible for managing the drawing tools in the Moonolith project. It provides functionality for selecting and using different tools, changing the color of the tools, and interacting with the canvas.

The `startUsingTool` function is the entry point for using a tool. It sets up the necessary event listeners on the canvas and determines which tool to use based on the mouse button pressed. The `useTool` function is called whenever the mouse is moved, and it draws on the canvas based on the current tool and color.

The `brushSwitch` and `selectBrush` functions allow for changing the current tool. The `brushSwitch` function cycles through the available tools, playing a sound each time the tool is changed. The `selectBrush` function allows for directly selecting a tool.

The `colorPicker` and `colorSwitch` functions manage the color of the tools. The `colorPicker` function picks a color from the canvas based on the mouse position. The `colorSwitch` function changes the current color based on the mouse button pressed and the color passed in.

Here's an example of how these functions might be used:

```javascript
startUsingTool(e, mousePos); // Start using a tool
brushSwitch(); // Switch to the next tool
selectBrush('large'); // Select the 'large' tool
colorSwitch(e, 5); // Switch to color 5
```

This code is crucial for the user interaction with the canvas in the Moonolith project. It allows for drawing on the canvas with different tools and colors, and provides feedback through sounds.
