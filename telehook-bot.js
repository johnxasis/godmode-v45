// ✅ Telegram Webhook Bot – Live Alert System
const token = "8141617963:AAHOiFlYLmu2Jih1jftslslJjXb74WZt-Qk";
const chatId = "2106538137";
const message = "🚀 GODMODE Swarm online. Wallets active. Funnels converting.";

fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: message
  })
})
.then(res => res.json())
.then(data => console.log("[TELEHOOK] ✅ Message sent:", data))
.catch(err => console.error("[TELEHOOK] ❌ Error:", err));

// Optional: Recurring ping every 3 hours
setInterval(() => {
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: "🧠 Swarm check-in: All systems profitable." })
  });
}, 10800000);
