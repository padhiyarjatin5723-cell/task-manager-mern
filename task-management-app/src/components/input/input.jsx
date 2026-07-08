function Input({
  className = "",
  ...props
}) {
  return (
    <input
      {...props}
      className={`
        w-full
        h-14
        px-5
        rounded-2xl
        border
        border-slate-200
        bg-white
        outline-none
        text-slate-700
        placeholder:text-slate-400
        focus:border-indigo-500
        focus:ring-4
        focus:ring-indigo-100
        duration-300
        ${className}
      `}
    />
  );
}

export default Input;