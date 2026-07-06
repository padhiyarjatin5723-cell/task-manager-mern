function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-10 w-full max-w-md ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;