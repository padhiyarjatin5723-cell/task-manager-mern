function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;