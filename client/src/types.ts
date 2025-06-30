export interface Game {
  id: string;
  name: string;
  entryFee: number;
  players: number;
}

export interface Transaction {
  id: number;
  type: "recharge" | "deduct";
  amount: number;
  date: string;
}

export interface Wallet {
  coins: number;
  transactions: Transaction[];
}

export interface WalletContextType {
  wallet: Wallet;
  recharge: (amount: number) => void;
  deduct: (amount: number) => boolean;
  refreshWallet: () => void;
}
