import { motion } from "framer-motion";

function DashboardCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`relative overflow-hidden rounded-[30px] bg-gradient-to-br ${color} p-7 text-white shadow-2xl`}
    >
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

      <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-black/10 blur-xl" />

      <div className="flex justify-between items-start">

        <div>

          <p className="text-white/80 text-sm">
            {title}
          </p>

          <h2 className="mt-6 text-6xl font-black">
            {value}
          </h2>

        </div>

        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-xl">

          {icon}

        </div>

      </div>

    </motion.div>
  );
}

export default DashboardCard;