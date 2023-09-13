[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/utils/conversions.js)

The code provided is a collection of utility functions that are used in the Moonolith project. These functions are responsible for handling mouse events and converting mouse coordinates to positions within the Moonolith grid.

The `isInCircle` function takes in the mouse position, the center coordinates of a circle, its radius, and the current plan and catalog. It first converts the mouse position to the corresponding layer using the `convertToLayer` function. Then, it calculates the distance between the mouse position and the center of the circle using the distance formula. If the distance is less than or equal to the radius, it returns true, indicating that the mouse is inside the circle.

The `isInSquare` function is similar to `isInCircle`, but it checks if the mouse position is inside a square defined by its minimum and maximum x and y coordinates. It also uses the `convertToLayer` function to convert the mouse position to the corresponding layer.

The `convertToLayer` function takes in the mouse coordinates, the current plan, and the catalog. It determines the appropriate catalog based on the provided catalog parameter and assigns it to `thisCatalog`. Then, it retrieves the image associated with the current plan from the catalog. Finally, it subtracts the image's x and y coordinates from the mouse coordinates to obtain the coordinates within the layer.

The `mousePosInGrid` function is responsible for converting the mouse position relative to the canvas to the corresponding position within the Moonolith grid. It takes in the mouse event object and calculates the x and y coordinates by subtracting the canvas's bounding client rectangle's x and y coordinates from the mouse event's x and y coordinates, respectively. It then divides these values by the product of the scaleFactor, pixelSize, and converts them to integers using `Math.floor`.

The `convertToMonolithPos` function converts the mouse position to the corresponding position within the Moonolith grid. It takes in the mouse position and adjusts the y coordinate by subtracting the viewPosY, renderHeight, and other constants. It also adjusts the x coordinate by subtracting the viewPosX and other constants. If the resulting x and y coordinates are outside the bounds of the Moonolith grid, it returns undefined. Otherwise, it returns the adjusted mouse position.

These utility functions are likely used throughout the Moonolith project to handle mouse events and convert mouse coordinates to positions within the Moonolith grid. They provide a convenient way to check if the mouse is inside specific shapes and convert mouse positions to the appropriate coordinates within the project.
## Questions: 
 **Question 1:** What is the purpose of the `isInCircle` function?

**Answer:** The `isInCircle` function checks if a given mouse position is inside a circle defined by its center coordinates, radius, and other parameters.

**Question 2:** What does the `convertToLayer` function do?

**Answer:** The `convertToLayer` function takes a set of coordinates and converts them to a new set of coordinates relative to a specific image or GUI element.

**Question 3:** What is the purpose of the `convertToMonolithPos` function?

**Answer:** The `convertToMonolithPos` function converts a given mouse position to a position within the Monolith grid, taking into account various constants and offsets.