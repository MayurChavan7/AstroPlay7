import { useWallet } from "../hooks/useWallet";
import axios from "axios"; // make sure this is imported

const Wallet = () => {
  const { wallet, recharge, refreshWallet } = useWallet();

  const resetWallet = async () => {
    try {
      await axios.post("http://localhost:5000/wallet/reset");
      refreshWallet();
    } catch (err) {
      console.error("Failed to reset wallet", err);
    }
  };

  return (
    <div className="border rounded-2xl p-4 shadow bg-white">
      <h2 className="text-lg font-bold mb-2">My Wallet</h2>
      <p className="text-xl mb-2">Coins: {wallet.coins}</p>
      <div className="flex gap-2 mb-4">
        {[20, 50, 100].map((pack) => (
          <button
            key={pack}
            onClick={() => recharge(pack)}
            className="bg-green-600 text-white rounded-xl px-4 py-2 hover:bg-green-700 transition"
          >
            Add {pack} coins
          </button>
        ))}
      </div>
      <button
        onClick={resetWallet}
        className="w-full bg-red-600 text-white rounded-xl py-2 hover:bg-red-700 transition"
      >
        Reset Wallet
      </button>
    </div>
  );
};

export default Wallet;
