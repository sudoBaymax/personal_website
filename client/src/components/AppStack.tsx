import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import glanceLogo from "../assets/app-logos/glance.png";
import roomyLogo from "../assets/app-logos/roomy.png";
import spearphishLogo from "../assets/app-logos/spearphish.png";
import medaiLogo from "../assets/app-logos/medai.png";

const apps = [
  { logo: glanceLogo, name: "Glance" },
  { logo: roomyLogo, name: "Roomy" },
  { logo: spearphishLogo, name: "Spearphish" },
  { logo: medaiLogo, name: "MedAI" }
];

export default function AppStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % apps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-stack">
      <motion.div
        key={`back-${index}`}
        className="app-card back-card"
        initial={{ y: -30, scale: 0.6, opacity: 1 }}
        animate={{ y: -20, scale: 0.7, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      <motion.div
        key={`middle-${index}`}
        className="app-card middle-card"
        initial={{ y: -35, scale: 0.6, opacity: 1 }}
        animate={{ y: -15, scale: 0.7, opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />

      <motion.div
        key={index}
        className="app-card front-card"
        initial={{ scale: 0.8, y: -15, opacity: 0 }}
        animate={{ scale: 0.9, y: 5, opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <motion.img
          src={apps[index].logo}
          alt={apps[index].name}
          className="app-logo"
        />
      </motion.div>
    </div>
  );
}
