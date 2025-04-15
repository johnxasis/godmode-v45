// Tracks return visitors and rotates offer
const visits = localStorage.getItem("visits") || 0;
localStorage.setItem("visits", parseInt(visits) + 1);
console.log(`[RETARGET] Visitor #${visits}. Showing retargeted funnel.`);
