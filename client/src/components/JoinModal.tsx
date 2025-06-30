interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  gameName: string;
  entryFee: number;
}

const JoinModal = ({ open, onClose, onConfirm, gameName, entryFee }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-2xl shadow w-80">
        <h3 className="text-lg font-semibold mb-2">Confirm Join</h3>
        <p>
          Join <strong>{gameName}</strong> for {entryFee} coins?
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Yes, Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
