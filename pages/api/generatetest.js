import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { text } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Create 5 clear test questions based on this text:\n\n${text}`,
        },
      ],
    });

    res.status(200).json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



