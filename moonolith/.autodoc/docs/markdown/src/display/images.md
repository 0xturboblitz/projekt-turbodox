[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/display/images.js)

The code provided is a module that manages the image catalog for the Moonolith project. It exports several functions and a variable related to the image catalog.

The `imageCatalog` variable is an object that contains various image entries. Each entry represents an image used in the project and has properties such as `startX`, `startY`, `layer`, `type`, `fileName`, and `display`. These properties define the position, layering, type, file name, and display status of each image.

The `updateImageCatalog` function is responsible for updating the positions of the images in the catalog based on the current view position and rendering height. It also handles the display of certain images based on user interactions. For example, if the user's pointer is within a certain circular area defined by coordinates and radius, specific animations are launched and the display status of certain images is toggled.

The `displayImage` function allows for the display status of a specific image to be set to true. This can be used to show or hide specific images in the catalog.

The `initClouds` function initializes the cloud images in the catalog. It generates a random number of cloud images and assigns them random positions and types. The cloud images are loaded from files and their positions are translated over time to create a moving effect.

The `loadImages` function loads the images in the catalog by creating new `Image` objects and setting their `src` properties to the corresponding file paths. It also sets additional properties such as `shakeX` and `parallax` based on the image's type and layer.

The `drawImages` function is responsible for drawing the images onto a canvas context. It iterates over the image catalog and checks if each image should be drawn based on its layer, display status, and loaded status. If all conditions are met, the image is drawn onto the canvas.

The `addSideMonolith` function adds side monolith images to the catalog based on a given monolith height. It calculates the number of side monoliths that need to be added and creates new entries in the image catalog with updated start positions.

The `translateImage` function is a helper function used to translate the position of an image over time. It takes an image object as a parameter and sets an interval to increment its `startX` property. This creates a scrolling effect for the image.

Overall, this code module manages the image catalog for the Moonolith project, including loading, positioning, and displaying images. It also handles user interactions and animations related to specific images in the catalog.
## Questions: 
 1. What is the purpose of the `updateImageCatalog` function?
- The `updateImageCatalog` function updates the positions of the images in the `imageCatalog` object based on the current view position and other factors.

2. What is the purpose of the `displayImage` function?
- The `displayImage` function sets the `display` property of a specific image in the `imageCatalog` object to `true`, indicating that the image should be displayed.

3. What is the purpose of the `initClouds` function?
- The `initClouds` function initializes the cloud images in the `imageCatalog` object by generating random positions and other properties for each cloud image.