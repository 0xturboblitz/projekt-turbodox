import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { PromptTemplate } from "langchain/prompts";
import fs from "fs";
import {
  JSONLoader,
  JSONLinesLoader,
} from "langchain/document_loaders/fs/json";
dotenv.config();

const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const prompt = PromptTemplate.fromTemplate(
  `You are a helpful assistant writing the developer documentation of Moonolith.
  I am going to pass to you revelant code from the project.
  Write the {pageName} page of the documentation of Moonolith.
  Only return the full page of documentation in Markdown format.
  `
);

async function main() {
  // const loader = new TextLoader("script.ts");
  const loader = new DirectoryLoader("../moonolith/src", {
    ".js": (path) => new TextLoader(path),
    // ".json": (path) => new JSONLoader(path, "/texts"),
  });

  const docs = await loader.load();

  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  );

  const pageName = "Get Started";
  const formattedPrompt = await prompt.format({
    pageName,
  });

  const resultOne = await vectorStore.similaritySearch("animations", 3);

  console.log(resultOne);

  const result = await llm.predict(formattedPrompt);

  console.log("result", result);

  fs.writeFile("result.md", result, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

main();
