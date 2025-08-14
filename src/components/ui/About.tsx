import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="space-y-6">
      <motion.h2
        className="text-4xl font-bold text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <p className="text-lg">
        Computer Science Graduate | AIML Enthusiast | Writer. Passionate about
        Artificial Intelligence, Machine Learning, Generative AI, and Full Stack
        Development. I also explore writing in philosophy, fiction, poetry, and
        professional content. Always eager to innovate and contribute to
        impactful projects.
      </p>
    </section>
  );
};

export default About;
