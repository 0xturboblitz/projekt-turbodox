[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/monolith/undoStack.js)

The code provided is a module that handles the management of events and changes in a larger project called Moonolith. The purpose of this code is to keep track of changes made to a monolith, which is represented by the `monolith` and `monolithIndexes` arrays. 

The code starts by importing the `Const` module from the '../constants' file and the `monolith` and `monolithIndexes` arrays from the './monolith' file.

The code then initializes several variables:
- `eventStack` and `inverseEventStack` are arrays that will store the events and their inverse events respectively.
- `currentEvent` and `inverseCurrentEvent` are arrays that will store the changes made in the current event and its inverse event respectively.
- `maxSize` is a constant that determines the maximum size of the event stacks.

The code then defines several functions:
- `closeCurrentEvent` is a function that is called when an event is completed. It pushes the current event to the `eventStack`, removes the oldest event from the stack if it exceeds the `maxSize`, and resets the `currentEvent` and `inverseEventStack` arrays.
- `addToCurrentEvent` is a function that is called when a change is made to the monolith. It adds the change to the `currentEvent` array.
- `undo` is a function that is called when the user wants to undo the last event. It pops the last event from the `eventStack`, applies the inverse changes to the monolith, and pushes the inverse changes to the `inverseEventStack`. It also removes the oldest inverse event from the stack if it exceeds the `maxSize`.
- `redo` is a function that is called when the user wants to redo the last undone event. It pops the last inverse event from the `inverseEventStack`, applies the changes to the monolith, and pushes the changes to the `eventStack`. It also removes the oldest event from the stack if it exceeds the `maxSize`.

Finally, the code exports the `closeCurrentEvent`, `addToCurrentEvent`, `undo`, and `redo` functions for use in other parts of the Moonolith project.

In the larger Moonolith project, this code can be used to keep track of changes made to the monolith and allow the user to undo and redo those changes. For example, if the user paints a pixel on the monolith and then decides to undo that change, the `undo` function can be called to revert the pixel to its previous state. Similarly, if the user undoes a change and then decides to redo it, the `redo` function can be called to reapply the change. This functionality can be useful in applications where the user needs to have fine-grained control over the changes made to a visual representation, such as an image editor or a drawing application.
## Questions: 
 1. What is the purpose of the `eventStack` and `inverseEventStack` arrays?
- The `eventStack` array stores arrays of changes made to the `monolith` object, while the `inverseEventStack` array stores arrays of changes made during undo operations.

2. What is the significance of the `maxSize` constant?
- The `maxSize` constant determines the maximum number of events that can be stored in the `eventStack` and `inverseEventStack` arrays. If the arrays exceed this size, the oldest events will be removed.

3. How are changes to the `monolith` object and `monolithIndexes` array being undone and redone?
- Changes are undone by popping an event array from the `eventStack`, reverting the changes made in that event, and pushing the inverse changes to the `inverseEventStack`. Redoing changes is done by popping an event array from the `inverseEventStack`, reverting the inverse changes made in that event, and pushing the changes back to the `eventStack`.