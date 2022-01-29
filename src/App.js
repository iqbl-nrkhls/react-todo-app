import "./style.css";

import React from 'react';
import HeroImage from "./components/HeroImage";
import Header from "./components/Header";
import DisplayTodos from "./components/DisplayTodos";

import { motion } from "framer-motion/dist/framer-motion";

const App = () => {  
  return (
    <div className="app">
      <HeroImage />
      <div className="relative max-w-[590px] mx-auto z-10 p-6 pt-11 md:pt-[80px]">
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="mb-4 md:mb-6">
          <Header />
        </motion.div>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}>
          <DisplayTodos />
        </motion.div>
      </div>
    </div>
  );
}

export default App;