import OpenAI from "openai";
import dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
dotenv.config();

const openai = new OpenAI({
  apiKey: (process as any).env.OPENAI_API_KEY,
});

async function processFile(fileName: string) {
  const jsCodeAsString: string = fs.readFileSync(
    path.join(__dirname, `../preact/src/${fileName}`),
    "utf8"
  );

  console.log(`----- Processing: ${fileName} -----`);

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant.
          The user is going to pass to you a page of code.
          Identify the functions and their TSDoc documentation.
          For each function, add a @call property for each other function called by that function.
          Return to the user only the updated TSDoc of the functions.
        `,
      },
      {
        role: "user",
        content: jsCodeAsString,
      },
      // {
      //   role: "user",
      //   content:
      //     `I'm creating a new version of the TSDoc format that adds a new property @call that allows to document the function calls.
      //     I'm going to pass to you a page of code.
      //     I want you to identify the functions and their TSDoc documentation.
      //     For each function, add a @call property for each other function called by that function.
      //     Return to me only the updated TSDoc of the functions.
      //     Here is the page :

      //   ` + jsCodeAsString,
      // },
    ],
  });

  const generatedContent = completion.choices[0].message?.content || "";

  console.log("generatedContent", generatedContent);
  // Write the generated content to a file
  fs.writeFileSync(
    path.join(__dirname, `./result/${fileName}.generated`),
    generatedContent
  );

  console.log(
    `----- Generated content written to: ${fileName}.generated -----`
  );
}

async function main() {
  // Array of file names to process
  const fileNames = [
    // "cjs.js",
    "clone-element.js",
    // "component.js",
    // "constants.js",
    // "create-context.js",
    // "create-element.js",
    // ... more files
  ];

  for (const fileName of fileNames) {
    try {
      await processFile(fileName);
    } catch (error) {
      console.error(`Error processing ${fileName}:`, error);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
