[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/tree/master/.autodoc/docs/json/src/utils)

The `utils` folder in the `json/src` directory of the Moonolith project contains utility functions for handling mouse interactions within the project. These functions are encapsulated in the `conversions.js` file.

The `conversions.js` file provides a set of utility functions that determine the position of the mouse within different contexts. For instance, the `isInCircle` and `isInSquare` functions check if the mouse position is within a given circle or square, respectively. They first convert the mouse position to the coordinate system of a specified layer using the `convertToLayer` function, and then perform the geometric calculations. 

```javascript
if (isInCircle(mousePos, circleCenter, radius)) {
  // Mouse is within the circle
}
```

The `mousePosInGrid` function calculates the mouse position within a grid. It first gets the position of the canvas element relative to the viewport, and then calculates the grid coordinates by subtracting the canvas position from the mouse position and dividing by the scale factor and pixel size.

```javascript
let gridPos = mousePosInGrid(mousePos, canvasPos, scaleFactor, pixelSize);
```

The `convertToMonolithPos` function converts the mouse position to the coordinate system of the Monolith, a specific element within the project. It adjusts the coordinates based on the position and size of the Monolith, and returns `undefined` if the resulting position is outside the Monolith.

```javascript
let monolithPos = convertToMonolithPos(mousePos, monolithPos, monolithSize);
if (monolithPos !== undefined) {
  // Mouse is within the Monolith
}
```

These functions are essential for handling mouse interactions with various elements in the Moonolith project, such as selecting an object, dragging and dropping, or hovering over an element to display a tooltip. They provide a consistent way to handle mouse positions and interactions across different parts of the project.
