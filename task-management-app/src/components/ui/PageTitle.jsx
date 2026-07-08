function PageTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-10">

      <h1 className="text-5xl font-black tracking-tight text-white">
        {title}
      </h1>

      <p className="mt-3 text-lg text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}

export default PageTitle;