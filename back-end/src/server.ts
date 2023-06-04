import app from "./app.js";
import "dotenv/config"

const PORTA = process.env.PORTA || 5000;
app.listen(PORTA, () => console.log(`***Server running in port: ${PORTA}***`));