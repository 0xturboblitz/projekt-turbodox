[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/blob/master/src/monolith/undoStack.js)

This code is part of a system that manages changes to a monolith, a large structure that is represented as a 2D array of pixels. The monolith can be modified by changing the color and z-index of its pixels. The code provides a way to track these changes and undo or redo them if necessary.

The changes are stored in two stacks: `eventStack` and `inverseEventStack`. Each item in these stacks is an event, which is a list of changes. A change is represented as an object with properties `x`, `y`, `oldColor`, and `oldZIndex`, which represent the pixel's coordinates, its previous color, and its previous z-index, respectively.

The `addToCurrentEvent` function is used to add a change to the current event. When an event is completed, the `closeCurrentEvent` function is called to push the current event to the `eventStack` and clear the current event and `inverseEventStack`.

The `undo` function pops the last event from the `eventStack`, applies the changes in reverse, and pushes the reversed changes to the `inverseEventStack`. The `redo` function does the opposite: it pops the last event from the `inverseEventStack`, applies the changes, and pushes them to the `eventStack`.

For example, if a pixel at (5, 5) was changed from red to blue, the change would be added to the current event with `addToCurrentEvent(5, 5, [255, 0, 0], 1)`. When the changes are done, `closeCurrentEvent` would be called. If the user wants to undo the change, they would call `undo()`, which would change the pixel back to red and add the change to the `inverseEventStack`. If they then call `redo()`, the pixel would be changed back to blue and the change would be added back to the `eventStack`.
