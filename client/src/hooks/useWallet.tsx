import { useState, useEffect, createContext, useContext } from "react";
import { Wallet, WalletContextType } from "../types";
import { getWallet, rechargeWallet, deductWallet } from "../services/api";

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<Wallet>({ coins: 0, transactions: [] });

  const refreshWallet = async () => {
    const data = await getWallet();
    setWallet(data);
  };

  const recharge = async (amount: number) => {
    const data = await rechargeWallet(amount);
    setWallet(data);
  };

  const deduct = async (amount: number) => {
    try {
      const data = await deductWallet(amount);
      setWallet(data);
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    refreshWallet();
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, recharge, deduct, refreshWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    throw new Error("useWallet must be used inside WalletProvider");
  }
  return ctx;
};
