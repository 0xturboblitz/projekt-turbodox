[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/main.js)

The code provided is a part of the Moonolith project and is responsible for initializing the application and importing chunks of data into the Monolith.

The `initApp` function is the entry point of the application. It first calls the `setRoute` function to set the route based on the URL parameters. It checks if the `Opensea` parameter is present in the URL, and if so, assigns it to the `Opensea` variable. It also parses the `runeNumber` from the URL and assigns it to the `runeNumber` variable. If the `Opensea` parameter is not present, it checks if the user has visited the site before by checking the `visited` cookie. If the user has not visited before, it sets the `firstTime` variable to true and sets the `visited` cookie to true for 7 days.

Next, the function calls the `parseAPNG` function to parse APNG images. If it is the first time and the `Opensea` variable is not set, it launches the intro. Otherwise, it sets the monolith height, initializes the display, imports the chunks, and skips the intro.

The `setInterval` function is used to periodically call the `importNewChunks` function every 30 seconds. This function checks if new chunks have been imported by comparing the `importedChunks` variable with the number of chunks in the metadata. If new chunks are found, it retrieves the chunks and buffers them on the Monolith.

The `chunkImport` function is responsible for importing the chunks. It first waits for the `monoHeightSet` promise to resolve, which is set in the `setMonoHeightAndBuildIt` function. Then, it retrieves all the chunks using the `getAllChunks` function and buffers each chunk on the Monolith.

The `importNewChunks` function is called periodically to import new chunks. It retrieves the metadata and compares the number of imported chunks with the number of chunks in the metadata. If new chunks are found, it retrieves each chunk and buffers it on the Monolith. It also updates the Monolith height based on the number of imported chunks.

The `setMonoHeightAndBuildIt` function retrieves the metadata and calculates the Monolith height based on the number of Klon and the threshold in the metadata. It sets the Monolith height using the `setMonolithHeight` function from the `Const` module, builds the Monolith, and initializes the clouds.

Overall, this code initializes the application, sets the route, imports and buffers chunks on the Monolith, and periodically imports new chunks. It also handles the Monolith height and initializes the display.
## Questions: 
 1. What is the purpose of the `initApp` function and how is it used?
- The `initApp` function is responsible for initializing the application. It sets the route, parses APNG files, launches the intro if it's the first time, and imports chunks. It is called once at the start of the program.

2. What is the purpose of the `chunkImport` function and how is it used?
- The `chunkImport` function is used to import chunks and buffer them on the monolith. It takes a `monoHeightSet` parameter and imports all chunks using the `getAllChunks` function. It is called within the `initApp` function.

3. What is the purpose of the `importNewChunks` function and how is it used?
- The `importNewChunks` function is used to import new chunks and buffer them on the monolith. It checks if there are any new chunks available by comparing the `importedChunks` variable with the number of chunks in the metadata. If there are new chunks, it retrieves and buffers them. It is called periodically using `setInterval`.