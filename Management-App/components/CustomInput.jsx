/* eslint-disable */

export default function Input({ label, type, id, namedRef }) {
  const inputClass = `bg-neutral-300  text-neutral-600 text-lg border-b-2 rounded border-neutral-400 hover:border-neutral-600 focus:outline-none ${
    type === "textarea" ? "h-16 overflow-y-auto" : "h-12"
  } w-full px-2`;

  return (
    <p className="my-8 block">
      <label
        htmlFor={id}
        className="block font-semibold text-neutral-500 text-lg mb-1"
      >
        {label.toUpperCase()}
      </label>
      {type === "textarea" ? (
        <textarea ref={namedRef} required className={inputClass} id={id} />
      ) : (
        <input
          ref={namedRef}
          type={type}
          required
          className={inputClass}
          id={id}
        />
      )}
    </p>
  );
}
