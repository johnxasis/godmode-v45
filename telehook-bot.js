// ✅ Verified Telegram Webhook Bot – Auto Triggered on Page Load
window.onload = function () {
  const token = "8141617963:AAHOiFlYLmu2Jih1jftslslJjXb74WZt-Qk";
  const chatId = "2106538137";
  const message = "🚀 GODMODE Swarm online. Wallets active. Funnels converting.";

  console.log("[TELEHOOK] 🚀 Attempting to send Telegram alert...");

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
  .then(data => {
    console.log("[TELEHOOK] ✅ Message sent:", data);
    if (!data.ok) {
      console.warn("[TELEHOOK] ⚠️ Telegram API responded, but not OK:", data);
    }
  })
  .catch(err => {
    console.error("[TELEHOOK] ❌ Telegram message failed:", err);
  });
};
