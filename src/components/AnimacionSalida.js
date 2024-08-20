import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FullScreenAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isAnimatingLe, setIsAnimatingLe] = useState(true);
  const [isAnimatingLeRev, setIsAnimatingLeRev] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleFondo, setIsVisibleFondo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleFondo(false);
      console.log("He activado setIsVisibleFondo ");
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`${!isVisibleFondo ? "hidden" : "flex"}`}>

<motion.div
    className="fixed top-0 left-0 w-full h-[33vh] bg-paper-texture z-40"
    initial={{ scaleX: 1 }}
    animate={{ scaleX: isAnimating ? 1 : 0 }}
    transition={{
      type: "spring",
      damping: 20,
      duration: 5,
    }}
    style={{ transformOrigin: "left " }} // Cambia el origen de la transformación
  ></motion.div>
    <motion.div
    className="fixed top-[33%] left-0 w-full h-[33vh] bg-paper-texture z-40"
    initial={{ scaleX: 1 }}
    animate={{ scaleX: isAnimating ? 1 : 0 }}
    transition={{
      type: "spring",
      damping: 20,
      duration: 5,
    }}
    style={{ transformOrigin: "right" }} // Cambia el origen de la transformación
  >
    <div
      className={`fixed flex justify-center items-center w-full  h-full z-60 ${
        !isVisibleFondo ? "hidden" : ""
      }`}
    >
      <motion.p
       initial={{ opacity: 1, scale: 1 }}
       animate={{ opacity: isVisibleFondo ? 1 : 0, scale: 1 }}
       transition={{
         duration: 0.5,
         delay: 0,
         ease: [0, 0.71, 0.2, 1.01]
       }}
        className={`font-sans relative   underlinecartawhite  z-50  text-5xl text-[#3fb4c4] 
          ${!isVisibleFondo ? "hidden" : "flex"}`}
      >
        LeRomer
      </motion.p>

      <div></div>
    </div>
    </motion.div>
    <motion.div
    className="fixed top-[66%] left-0 w-full h-[34vh] bg-paper-texture z-40"
    initial={{ scaleX: 1 }}
    animate={{ scaleX: isAnimating ? 1 : 0 }}
    transition={{
      type: "spring",
      damping: 20,
      duration: 5,
    }}
    style={{ transformOrigin: "left " }} // Cambia el origen de la transformación
  ></motion.div>
    </main>

  );
};

export default FullScreenAnimation;
