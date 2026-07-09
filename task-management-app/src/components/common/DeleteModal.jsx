import { motion, AnimatePresence } from "framer-motion";
import { Trash2, AlertTriangle } from "lucide-react";

function DeleteModal({
  open,
  onClose,
  onDelete,
}) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="w-[450px] rounded-[32px] border border-red-500/20 bg-[#151823] p-8 shadow-[0_25px_80px_rgba(0,0,0,.45)]"
          >

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">

              <Trash2
                size={38}
                className="text-red-500"
              />

            </div>

            <h2 className="mt-6 text-center text-3xl font-black text-white">

              Delete Task

            </h2>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">

              <AlertTriangle
                size={22}
                className="mt-1 text-yellow-400"
              />

              <p className="text-sm leading-7 text-slate-300">

                This action is permanent.
                Once deleted, this task cannot be recovered.

              </p>

            </div>

            <div className="mt-8 flex gap-4">

              <button
                onClick={onClose}
                className="flex-1 rounded-2xl border border-white/10 py-3 font-semibold text-white transition hover:bg-white/10"
              >

                Cancel

              </button>

              <button
                onClick={onDelete}
                className="flex-1 rounded-2xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-500"
              >

                Delete Forever

              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default DeleteModal;