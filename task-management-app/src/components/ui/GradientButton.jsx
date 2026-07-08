function GradientButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        via-indigo-600
        to-blue-600
        px-7
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_15px_40px_rgba(124,58,237,.35)]
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default GradientButton;