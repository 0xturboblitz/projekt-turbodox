[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/tree/master/.autodoc/docs/json/src)

The `json/src` folder in the Moonolith project contains the core JavaScript files that manage the application's functionality. The `constants.js` file acts as a central repository for various constants and configuration values used throughout the project. This includes dimensions, colors, and other settings that control the appearance and behavior of the application. The `intro.js` file manages the introduction sequence of the project, while the `main.js` file handles the initialization and dynamic updates of the web application.

The `assets` subfolder contains the `sounds.js` file which manages the audio functionality of the project. This includes playing, pausing, and muting audio files. The `display` subfolder contains code that manages the display and interaction of various elements within the project, such as FAQs, animations, and a monolith structure. The `monolith` subfolder contains JavaScript files that manage the animation, drawing tools, and undo/redo functionality for the monolith structure. The `utils` subfolder contains utility functions for handling mouse interactions within the project.

For example, to animate the monolith or individual runes, you would use the `animateMonolith` or `animateRune` functions from the `monolithAnims.js` file in the `monolith` subfolder:

```javascript
import { animateMonolith, animateRune } from './monolithAnimation';

// Animate the monolith
animateMonolith();

// Animate a rune with id 1
animateRune(1);
```

To handle mouse interactions with various elements in the project, you would use the utility functions from the `conversions.js` file in the `utils` subfolder:

```javascript
let gridPos = mousePosInGrid(mousePos, canvasPos, scaleFactor, pixelSize);
let monolithPos = convertToMonolithPos(mousePos, monolithPos, monolithSize);
```

Overall, the `json/src` folder contains the core functionality of the Moonolith project, providing a rich user experience for interacting with the monolith, managing the display of FAQs and animations, and handling audio functionality.
