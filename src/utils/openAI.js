import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

export const openAi = new OpenAI({
  apiKey: OPEN_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
