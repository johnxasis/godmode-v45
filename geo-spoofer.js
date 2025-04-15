// Detects geo and serves localized spoof
const userLocale = navigator.language || 'en-US';
console.log(`[GEO-SPOOFER] Detected locale: ${userLocale}. Serving localized payload...`);
