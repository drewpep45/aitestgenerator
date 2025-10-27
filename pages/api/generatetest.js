import OpenAI from "openai";  // 👈 This is now your line 1

export const config = {
  api: {
    bodyParser: true,
  },
};

// 👇 rest of the code follows…
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// and so on...



