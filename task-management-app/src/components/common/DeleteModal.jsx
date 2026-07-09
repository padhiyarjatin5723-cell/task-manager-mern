function DeleteModal({
  open,
  onClose,
  onDelete,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-[430px] rounded-[30px] border border-white/10 bg-[#151823] p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white">
          Delete Task
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          This action cannot be undone.
          Are you sure you want to permanently delete this task?
        </p>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/10"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;