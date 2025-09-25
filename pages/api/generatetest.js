// pages/api/generatetest.js

export const config = {
  api: {
    bodyParser: true, // Ensures JSON body parsing (only for Pages Router)
  },
};

export default async function handler(req, res) {
  try {
    // Only allow POST
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ success: false, error: "Method not allowed" });
    }

    // Ensure body is present
    if (!req.body) {
      return res
        .status(400)
        .json({ success: false, error: "Request body is missing" });
    }

    // Extract text safely
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      return res
        .status(400)
        .json({ success: false, error: "No valid text provided" });
    }

    // Placeholder dummy questions
    const questions = [
      "1. What is the main topic of the text?",
      "2. List three key points discussed.",
      "3. Explain any terms that were new to you.",
    ];

    // Always return valid JSON
    return res.status(200).json({
      success: true,
      input: text,
      test: questions,
    });
  } catch (err) {
    console.error("API error:", err);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
}

