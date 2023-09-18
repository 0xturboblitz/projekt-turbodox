[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/blob/master/contracts/Base64.sol)

The `Base64` library in the Moonolith project provides a function for encoding bytes in base64. Base64 encoding is a common method for converting binary data into a string format that can be easily transmitted over systems that are designed to handle text. This encoding helps to ensure that the data remains intact without modification during transport.

The library contains a single function `encode(bytes memory data)`. This function takes a byte array as input and returns a base64 encoded string. If the input data is empty, it returns an empty string.

The function first calculates the length of the encoded string, then creates a new string with the calculated length plus an extra buffer. It uses inline assembly for efficient encoding. It reads the input data three bytes at a time, and for each three bytes, it writes four base64 characters to the result string. 

The assembly code also handles padding at the end of the encoded string. If the length of the input data is not a multiple of 3, it adds one or two '=' characters to the end of the encoded string to make the length a multiple of 4, as required by the base64 specification.

Here is an example of how to use the `encode` function:

```solidity
bytes memory data = "Hello, World!";
string memory encoded = Base64.encode(data);
```

In this example, `encoded` will be the base64 encoded string of "Hello, World!".
