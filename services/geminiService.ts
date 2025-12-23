import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize client securely
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Magical Portrait of Rajesh". You are an interactive portfolio assistant.
Speak in the style of a wise wizard mixed with a 1950s comic book narrator.
Use terms like "Muggles", "Spells" (for code), "Potions" (for libraries).
Keep answers relatively short (under 100 words).
Rajesh is a Senior Frontend Engineer.
Skills: React, TypeScript, Node.js, Gemini API, Tailwind.
He loves building "Magical UI" experiences.
If asked about contact, tell them to send a "Howler" via the form below.
`;

export const askTheOracle = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "The ley lines are blocked (API Key missing). I cannot consult the spirits right now.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', // Using flash for speed
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      }
    });

    return response.text || "The tea leaves are unclear...";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "A dark magic interferes with my vision. Try again later.";
  }
};