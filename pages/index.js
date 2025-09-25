import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateTest() {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generatetest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(data.test);
      } else {
        setResult("Error: " + data.error);
      }
    } catch (err) {
      setResult("Error: " + err.message);
    }
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      <h1>AI Test Generator</h1>
      <textarea
        rows={8}
        placeholder="Paste textbook text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ width: "100%", fontSize: 16 }}
      />
      <button onClick={generateTest} disabled={loading || !inputText} style={{ marginTop: 10, padding: "10px 20px", fontSize: 16 }}>
        {loading ? "Generating..." : "Generate Test"}
      </button>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 20, backgroundColor: "#f0f0f0", padding: 10, borderRadius: 5 }}>
        {result}
      </pre>
    </main>
  );
}
