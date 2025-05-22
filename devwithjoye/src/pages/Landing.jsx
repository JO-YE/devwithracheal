
// @ts-ignore
import { motion as _motion } from "framer-motion";
import { Box, PackageOpen } from "lucide-react";
import { useState } from "react";
import { ParticlesBg } from "../components/ParticleBg.jsx";

export const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pushUp, setPushUp] = useState(false); 
  const [showIntro, setShowIntro] = useState(false);

  const handleBoxClick = () => {
    setIsOpen(true);
    setTimeout(() => setPushUp(true), 2000);
    setTimeout(() => setShowIntro(true), 3000);
  };

  // For text animation in intro
  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    }),
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"> 
      <ParticlesBg />
      <div className="starry-bg" />

      <div className="relative z-10">
        {/* Initial Box */}
        {!isOpen && (
          <_motion.div
            onClick={handleBoxClick}
            className="cursor-pointer z-10 flex flex-col items-center space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Box size={90} className="text-white spin-slow" />

            {/* Exciting prompt */}
            <_motion.div
              className="text-white text-center"
              animate={{ y: [0, -5, 0], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <p className="font-semibold text-lg">Guess what's inside?</p>
              <p className="italic text-sm">Tap to reveal JOYE! 💡</p>
            </_motion.div>
          </_motion.div>
        )}

        {/* Package Open + Message */}
        {isOpen && !showIntro && (
          <_motion.div 
            key="found"
            initial={{ y: 0, opacity: 1 }}
            animate={pushUp ? { y: -300, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <PackageOpen size={80} className="text-white animate-bounce" />
            <div className="shadow-lg text-lg font-semibold text-white">
              🎉 Yayy! You found Me.
            </div>
          </_motion.div>
        )}

        {/* Intro/About Section */}
        {showIntro && (
          <_motion.div 
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-amber-50 rounded-2xl shadow-xl mt-10 p-6 max-w-md text-center space-y-4"
          >
            <_motion.h2 
              className="text-2xl font-bold text-gray-800"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={introVariants}
            >
              Welcome! <br /> Meet JOYE
            </_motion.h2>

            <_motion.p 
              className="text-gray-600"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={introVariants}
            >
              I’m <b>Joye</b> — a passionate software developer who loves bringing ideas or designs to life through code. <br /><br />
              Whether it's building smart interfaces or working with databases, <b>I'm here to create meaningful digital experiences.</b> <br /><br />
              I thrive in collaborative environments and enjoy building with teams to turn vision into reality.
            </_motion.p>

            <_motion.a 
              href="/home"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={introVariants}
            >
              <button className="bg-[#06061a] text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Discover More
              </button>
            </_motion.a>
          </_motion.div>
        )}
      </div>
    </div>
  );
};
