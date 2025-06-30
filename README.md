# AstroPlay 🎮🔮

> A mini social app module combining coin-based wallet, game challenges, and a smooth user interface — built as a demonstration project for a full-stack developer assignment.

---

## 🚀 Features

✅ Game Lobby:
- Displays mock games (“Challenge & Connect” and “Snake & Ladder”)
- Entry coin requirements
- Join game functionality with coin deduction
- Live player count (mocked)

✅ Wallet System:
- Coin balance tracking
- Transaction history (mocked data)
- Recharge with preset coin packs
- Deduct coins on game join
- Reset wallet and clear transaction history
- Error handling for insufficient balance

✅ Responsive UI:
- Clean, mobile-first
- Tailwind CSS styling
- Reusable components

✅ Future Ready:
- Placeholder architecture for Twilio / Exotel integration
- Easily extendable to real multiplayer game logic
- Modular TypeScript codebase

---

## ⚙️ Tech Stack

- Frontend: React + Vite + TypeScript + Tailwind CSS
- Backend: Node.js + Express (with JSON file storage as a mock DB)

---

## 💻 Local Development

Clone the repository:

```bash
git clone https://github.com//AstroPlay.git

Install dependencies
cd server
npm install
cd ../client
npm install

Start the backend
cd server
npm start
Start the frontend
cd ../client
npm run dev

🧩 Folder Structure
AstroPlay/
  client/   → React + Vite app
  server/   → Node + Express API
  db.json   → JSON mock database
👨‍💻 Author
Mayur Chavan
Full Stack Developer

📄 License
This project is for demonstration and interview purposes only.
