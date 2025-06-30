import axios from "axios";
import { Wallet } from "../types";

const BASE_URL = "http://localhost:5000";

export const getWallet = async (): Promise<Wallet> => {
  const response = await axios.get(`${BASE_URL}/wallet`);
  return response.data;
};

export const rechargeWallet = async (amount: number): Promise<Wallet> => {
  const response = await axios.post(`${BASE_URL}/wallet/recharge`, { amount });
  return response.data;
};

export const deductWallet = async (amount: number): Promise<Wallet> => {
  const response = await axios.post(`${BASE_URL}/wallet/deduct`, { amount });
  return response.data;
};
