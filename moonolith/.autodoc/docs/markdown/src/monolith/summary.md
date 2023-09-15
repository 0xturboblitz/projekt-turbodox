[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/tree/master/.autodoc/docs/json/src/monolith)

The `monolith` folder in the `src` directory of the Moonolith project contains JavaScript files that manage the animation, drawing tools, and undo/redo functionality for the monolith structure.

The `monolithAnims.js` file handles the animation of the monolith and its runes. It provides functions like `animateMonolith` and `animateRune` to animate the entire monolith or individual runes. These functions can be used as follows:

```javascript
import { animateMonolith, animateRune } from './monolithAnimation';

// Animate the monolith
animateMonolith();

// Animate a rune with id 1
animateRune(1);
```

The `tools.js` file manages the drawing tools for the project. It provides functions to start using a tool, switch between tools, and change the color of the tools. Here's an example of how these functions might be used:

```javascript
startUsingTool(e, mousePos); // Start using a tool
brushSwitch(); // Switch to the next tool
selectBrush('large'); // Select the 'large' tool
colorSwitch(e, 5); // Switch to color 5
```

The `undoStack.js` file provides a system to track changes to the monolith and undo or redo them if necessary. It uses two stacks, `eventStack` and `inverseEventStack`, to store the changes. Here's an example of how these functions might be used:

```javascript
addToCurrentEvent(5, 5, [255, 0, 0], 1); // Add a change to the current event
closeCurrentEvent(); // Close the current event
undo(); // Undo the last event
redo(); // Redo the last undone event
```

These files work together to provide a rich user experience for interacting with the monolith. They allow for animating the monolith, drawing on it with different tools and colors, and undoing or redoing changes.
