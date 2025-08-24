const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function analyzeText(text) {
  const response = await fetch(`${API_URL}/detect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return await response.json();
}
