// Synthetic User Emulator Swarm
const fakeEvents = ["scroll", "click", "hover", "like", "comment", "follow"];
setInterval(() => {
  const event = fakeEvents[Math.floor(Math.random() * fakeEvents.length)];
  console.log(`[USER-EMU] Simulated: ${event}`);
}, 3000);
