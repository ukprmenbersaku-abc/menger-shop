import { GoogleGenAI } from "@google/genai";

// Guideline: Always use new GoogleGenAI({ apiKey: process.env.API_KEY })
// Guideline: Assume process.env.API_KEY is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askSpongeBot = async (question: string): Promise<string> => {
  // Guideline: Do not check for API key existence or ask user for it.

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `
          あなたは「メンガーのスポンジ・キーホルダー」の親切な広報担当AIです。
          以下のトーンとルールで回答してください。

          トーン:
          - フレンドリーで親しみやすい（絵文字を適度に使用😊）。
          - 数学的な内容は、初心者にもわかりやすく噛み砕いて説明する。
          - 販売促進につなげるポジティブな表現を使う。

          知識:
          - 商品: メンガーのスポンジ（フラクタル図形）のキーホルダー。
          - 素材: PLA（ポリ乳酸）。トウモロコシなどを原料とするバイオプラスチックで、環境に優しく、硬くて丈夫。
          - 構造: 立方体に穴を空け続けることで、体積は0に近づき、表面積は無限大に発散する不思議な図形。
          - 販売場所: メルカリ。

          もし商品に関係のない質問が来た場合は、ユーモアを交えて「それは分かりませんが、無限の穴については語れますよ！」と返してください。
          回答は200文字以内で簡潔にまとめてください。
        `,
        temperature: 0.7,
      },
    });

    return response.text || "ごめんなさい、ちょっと考え込んでしまいました💦 もう一度聞いてみて！";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。現在AIがお休み中です😴";
  }
};