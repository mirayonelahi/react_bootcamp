export default function Square({ onClick, value }) {
  return (
    <>
      <button
        className="bg-blue-400 text-3xl border-2 font-bold border-blue-900 rounded-lg shadow-lg hover:bg-blue-500 "
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
}
