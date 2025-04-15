// Random UI mutations to avoid fingerprinting
const styles = ["layoutA", "layoutB", "fontX"];
console.log(`[CLOAK] Served variant: ${styles[Math.floor(Math.random() * styles.length)]}`);
