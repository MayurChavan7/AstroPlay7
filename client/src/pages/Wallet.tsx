import Wallet from "../components/Wallet";
import TransactionList from "../components/TransactionList";

const WalletPage = () => (
  <div className="p-4 space-y-4">
    <h1 className="text-2xl font-bold mb-4">My Wallet</h1>
    <Wallet />
    <TransactionList />
  </div>
);

export default WalletPage;
