
import OpenAI from "openai";
import * as dotenv from 'dotenv'

dotenv.config()

const openais = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});


export async function openAIStart() {
    const response = openais.completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: "What chemical compounds are computers mostly made from?",
            temperature: 0.6,
            max_tokens: 256,
        })
    console.log('Response Text', response.data)
}

openAIStart();