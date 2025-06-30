import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Load db.json
let db = JSON.parse(fs.readFileSync("./db.json", "utf8"));

// Get current wallet
app.get("/wallet", (req, res) => {
  res.json(db.wallet);
});

// Recharge coins
app.post("/wallet/recharge", (req, res) => {
  const { amount } = req.body;
  db.wallet.coins += amount;
  db.wallet.transactions.push({
    id: Date.now(),
    type: "recharge",
    amount,
    date: new Date().toISOString()
  });
  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));
  res.json(db.wallet);
});

// Deduct coins
app.post("/wallet/deduct", (req, res) => {
  const { amount } = req.body;
  if (db.wallet.coins < amount) {
    return res.status(400).json({ error: "Insufficient coins" });
  }
  db.wallet.coins -= amount;
  db.wallet.transactions.push({
    id: Date.now(),
    type: "deduct",
    amount,
    date: new Date().toISOString()
  });
  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));
  res.json(db.wallet);
});

// Reset wallet
app.post("/wallet/reset", (req, res) => {
  db.wallet.coins = 0;
  db.wallet.transactions = [];
  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));
  res.json(db.wallet);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
