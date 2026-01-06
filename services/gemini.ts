// import { GoogleGenAI } from "@google/genai";

// AI functionality is currently disabled.
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askSpongeBot = async (question: string): Promise<string> => {
  // Dummy response to satisfy type checking if imported elsewhere
  return "現在AI機能は無効化されています。";

  /*
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: question,
      config: {
        systemInstruction: `...`,
        temperature: 0.7,
      },
    });

    return response.text || "ごめんなさい、ちょっと考え込んでしまいました💦 もう一度聞いてみて！";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。現在AIがお休み中です😴";
  }
  */
};