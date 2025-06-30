import { useWallet } from "../hooks/useWallet";

const TransactionList = () => {
  const { wallet } = useWallet();
  return (
    <div className="border rounded-2xl p-4 shadow bg-white mt-4">
      <h2 className="text-lg font-bold mb-2">Transaction History</h2>
      <ul className="divide-y">
        {wallet.transactions.map((t) => (
          <li key={t.id} className="py-2 flex justify-between">
            <span>{t.type}</span>
            <span>{t.amount} coins</span>
            <span className="text-xs">{new Date(t.date).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
