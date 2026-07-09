function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-[30px] border border-white/10 bg-[#151823]/90 p-7">

      <div className="h-5 w-32 rounded bg-white/10" />

      <div className="mt-6 h-12 w-24 rounded bg-white/10" />

      <div className="mt-8 h-2 rounded bg-white/10" />

    </div>
  );
}

export default CardSkeleton;