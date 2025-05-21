import { motion } from "framer-motion"; 
import { Box, PackageOpen } from "lucide-react";
import { useState } from "react";
import { ParticlesBg } from "../components/ParticleBg.jsx";

export const Landing = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleBoxClick = () => {
    setIsOpen(true);
  };

    return <div className="relative min-h-screen  flex flex-col justify-center items-center overflow-x-hidden"> 
   <ParticlesBg />
    <div className="starry-bg" />
    <div className="relative z-10" >
      {!isOpen ? (
        <motion.div
          onClick={handleBoxClick}
          className="cursor-pointer"
        >
          <Box size={90} className="text-white spin-slow"/>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <PackageOpen  size={80} className="text-white animate-bounce"/>
          <div className="shadow-lg text-lg font-semibold">🎉 Yayy! You found JOYE.</div>
        </div>
      )
      }
    </div>
        </div>;

}