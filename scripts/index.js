import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function main() {
  // const prompt = `Suggest three names for an animal that is a superhero.
  // Animal: Cat
  // Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  // Animal: Dog
  // Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  // Animal: Axolotl
  // Names:`;

  
  const completion = await openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages:[
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Who won the world series in 2020?"},
      {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
      {"role": "user", "content": "Where was it played?"}
    ]
  })

  console.log(completion.data.choices);
  console.log(completion.data.choices[0].text);
}



main().catch((error) => {
  console.error(error);
  process.exit(1);
});