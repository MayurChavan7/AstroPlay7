import { type Game } from "../types";

interface Props {
  game: Game;
  onJoin: () => void;
}

const GameCard = ({ game, onJoin }: Props) => (
  <div className="border rounded-2xl p-4 shadow bg-white flex flex-col gap-2">
    <h3 className="text-xl font-semibold">{game.name}</h3>
    <p>Entry Fee: {game.entryFee} coins</p>
    <p>Players Online: {game.players}</p>
    <button
      onClick={onJoin}
      className="w-full bg-blue-600 text-white rounded-xl py-2 hover:bg-blue-700 transition"
    >
      Join
    </button>
  </div>
);

export default GameCard;
