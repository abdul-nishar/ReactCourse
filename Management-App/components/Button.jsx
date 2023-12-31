/* eslint-disable */
export default function Button({ text, additionalClasses, ...props }) {
  return (
    <button
      {...props}
      className={`${additionalClasses} text-xl rounded-lg px-6 py-3`}
    >
      {text}
    </button>
  );
}
