import { useEffect } from "react";
import { motion } from "framer-motion";

const Congratulations = () => {
  useEffect(() => {
    document.title = "Congratulations! - Your WellBeing";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-white p-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="bg-white p-8 rounded-xl shadow-xl max-w-2xl text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Congratulations!
        </h1>
        <p className="text-xl text-gray-600">
          You've selected to the finals! We're excited to see you at VIT Bhopal University. Get ready for an amazing experience!
        </p>
      </motion.div>
    </div>
  );
};

export default Congratulations;