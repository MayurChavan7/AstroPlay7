import { useState } from "react";
import { GAMES } from "../utils/constants";
import { Game } from "../types";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>(GAMES);
  return { games };
};
