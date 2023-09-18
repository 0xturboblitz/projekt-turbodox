[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/blob/master/src/display/FAQ.js)

The code in this file is primarily concerned with the display and management of a Frequently Asked Questions (FAQ) feature within the Moonolith project. It imports several dependencies from other modules, including view controls, image resources, GUI elements, and device controls.

The `FAQCatalog` object defines different layers of the FAQ view, each with a name, parallax effect, and starting position. The `displayFAQ` function is used to open the FAQ view, setting the FAQ type, zooming the view, and adjusting the GUI accordingly. If the device type is mobile, it also enables pan mode.

The `drawFAQ` function is responsible for rendering the FAQ view. It iterates over each layer in the `FAQCatalog`, calculates its position based on the parallax effect and current view position, and draws the corresponding image from the image catalog. If the layer is the FAQ layer, it also draws clouds. Finally, it draws the close button for the FAQ.

The `exitFAQ` function is used to close the FAQ view, resetting the view position and FAQ state.

The `drawClouds` function is a helper function used to draw cloud images onto the FAQ view. It iterates over the image catalog, skipping any images that are not of type 'cloud', calculates their position based on a parallax effect and the current view position, and draws them onto the view.

Here's an example of how these functions might be used in the larger project:

```javascript
import { displayFAQ, exitFAQ } from './FAQ';

// Open the FAQ to the 'stars' section
displayFAQ('stars');

// ... user interacts with FAQ ...

// Close the FAQ
exitFAQ();
```

This code would open the FAQ to the 'stars' section, allow the user to interact with it, and then close the FAQ when done.
