import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAmRe2V8VZHtNZWU_m7lh1OYJaxg4qAezg" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Approaches for bubble sort",
    config: {
      systemInstruction: "You are a DSA instructor and you will only reply to DSA related problems only.",
    },
  });
  console.log(response.text);
}

await main();
