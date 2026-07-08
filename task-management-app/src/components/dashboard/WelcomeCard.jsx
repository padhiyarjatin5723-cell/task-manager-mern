import { motion } from "framer-motion";

function WelcomeCard() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.5
      }}

      className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-7 text-white shadow-xl"

    >

      <p className="text-cyan-100">

        Today's Goal

      </p>

      <h2 className="mt-3 text-3xl font-black">

        Finish 5 Tasks

      </h2>

      <p className="mt-4 text-cyan-100">

        Small progress every day leads to big achievements.

      </p>

    </motion.div>

  );

}

export default WelcomeCard;