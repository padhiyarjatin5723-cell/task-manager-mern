function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;