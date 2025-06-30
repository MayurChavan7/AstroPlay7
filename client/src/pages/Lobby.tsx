import { useState } from "react";
import { useGames } from "../hooks/useGames";
import { useWallet } from "../hooks/useWallet";
import GameCard from "../components/GameCard";
import JoinModal from "../components/JoinModal";
import toast from "react-hot-toast";

const Lobby = () => {
  const { games } = useGames();
  const { deduct } = useWallet();
  const [selectedGame, setSelectedGame] = useState<{
    name: string;
    entryFee: number;
  } | null>(null);

  const handleJoinConfirm = async () => {
    if (!selectedGame) return;
    const success = await deduct(selectedGame.entryFee);
    if (success) {
      toast.success(`Joined ${selectedGame.name} successfully!`);
      setSelectedGame(null);
    } else {
      toast.error("Not enough coins to join this game");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Game Lobby</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onJoin={() => setSelectedGame({ name: game.name, entryFee: game.entryFee })}
          />
        ))}
      </div>
      <JoinModal
        open={selectedGame !== null}
        onClose={() => setSelectedGame(null)}
        onConfirm={handleJoinConfirm}
        gameName={selectedGame?.name || ""}
        entryFee={selectedGame?.entryFee || 0}
      />
    </div>
  );
};

export default Lobby;
