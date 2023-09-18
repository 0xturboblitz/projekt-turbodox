[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/tree/master/.autodoc/docs/json/src/display)

The `display` folder in the Moonolith project contains code that manages the display and interaction of various elements within the project, such as FAQs, animations, and a monolith structure.

The `FAQ.js` file manages the FAQ feature. It defines the FAQ view layers and controls the display, rendering, and exit of the FAQ view. For example, to open the FAQ to a specific section and then close it, you might use:

```javascript
import { displayFAQ, exitFAQ } from './FAQ';
displayFAQ('stars');
// ... user interacts with FAQ ...
exitFAQ();
```

The `animations.js` file handles animations. It defines an animation catalog and functions to manage animation frames, launch animations, update animation positions, draw animations, and initialize animations. For instance, to launch an animation, you would use the `launchAnim` function.

The `pointer.js` file manipulates a data structure representing a monolith. The `addPointer` function modifies the monolith based on the position of a pointer and the selected tool, while the `whiten` function lightens a specified area of the monolith. This could be part of a feature allowing users to interact with the monolith, using different tools to create different effects.

In summary, the `display` folder contains code that controls various visual and interactive elements of the Moonolith project. It manages the display of FAQs and animations, and allows user interaction with a monolith structure.
