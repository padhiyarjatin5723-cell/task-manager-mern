import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function FloatingActionButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/create-task")}
      className="
      fixed
      bottom-8
      right-8
      z-50
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-indigo-600
      text-white
      shadow-[0_20px_60px_rgba(124,58,237,.45)]
      "
    >
      <Plus size={28} />
    </motion.button>
  );
}

export default FloatingActionButton;