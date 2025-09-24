export const config = {
  api: {
    bodyParser: true, // ensures JSON body parsing
  },
};
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  // Placeholder logic: create dummy questions from input
  const questions = [
    "1. What is the main topic of the text?",
    "2. List three key points discussed.",
    "3. Explain any terms that were new to you.",
  ];

  // Send back dummy test
  res.status(200).json({ test: questions.join("\n") });
}
