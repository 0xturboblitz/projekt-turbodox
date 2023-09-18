[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/blob/master/src/constants.js)

The `Const` class in this file serves as a central repository for various constants and configuration values used throughout the Moonolith project. These constants include dimensions, colors, and other settings that are used to control the appearance and behavior of the application.

The class includes static getter methods for various properties such as `COLUMNS`, `LINES`, `MARGIN_TOP`, `MARGIN_BOTTOM`, `MARGIN_LEFT`, `MARGIN_RIGHT`, and others. These properties define the layout and dimensions of the application's interface. For example, `COLUMNS` and `LINES` define the size of the application's grid, while the `MARGIN_*` properties define the size of the margins around the grid.

The `setMonolithHeight` method allows the height of the monolith to be set dynamically. This could be used, for example, to adjust the size of the monolith based on user input or other factors.

The class also includes a series of color definitions in the form of RGB values. These colors are used throughout the application to ensure a consistent look and feel. The `PALETTE` and `GUI_PALETTE` properties return arrays of these colors, which could be used, for example, to populate a color picker in the application's interface.

Finally, the `PARALLAX_LAYERS` and `PALETTE_INFO` properties provide configuration values for more complex features of the application. `PARALLAX_LAYERS` defines the behavior of different layers in a parallax scrolling effect, while `PALETTE_INFO` provides configuration values for different versions of the application's color palette.

Here's an example of how these constants might be used in the application:

```javascript
import Const from './Const';

// Set the height of the monolith
Const.setMonolithHeight(500);

// Get the total number of lines in the grid
let totalLines = Const.LINES;

// Get the color for the sky
let skyColor = Const.SKY_COLOR;
```

This structure centralizes the configuration of the application, making it easier to manage and modify as the project evolves.
