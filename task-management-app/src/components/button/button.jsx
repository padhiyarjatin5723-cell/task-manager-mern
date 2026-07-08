function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`
        h-14
        px-8
        rounded-2xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-indigo-600
        to-violet-600
        shadow-lg
        hover:shadow-2xl
        hover:scale-[1.02]
        active:scale-95
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;