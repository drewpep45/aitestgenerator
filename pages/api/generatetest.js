import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    const { text } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Create a short test from this text. Number the questions clearly:\n\n${text}`,
        },
      ],
    });

    res.status(200).json({
      test: response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
