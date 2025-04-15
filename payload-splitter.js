// A/B test payload versions for engagement
const payloads = ["A", "B", "C"];
console.log(`[SPLITTER] Serving payload: ${payloads[Math.floor(Math.random() * 3)]}`);
