/* eslint-disable */

export default function Task({ children, clearTask }) {
  return (
    <div className="flex justify-between my-4">
      <p className="text-2xl text-stone-800 font-medium">{children}</p>
      <button
        onClick={clearTask}
        className="text-2xl text-stone-700 hover:text-red-500"
      >
        Clear
      </button>
    </div>
  );
}
