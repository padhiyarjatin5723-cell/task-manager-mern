function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}

export default Input;