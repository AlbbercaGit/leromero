import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FullScreenAnimation = ({ key }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isAnimatingLe, setIsAnimatingLe] = useState(true);
  const [isAnimatingLeRev, setIsAnimatingLeRev] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleFondo, setIsVisibleFondo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingLeRev(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleFondo(false);
      console.log(setIsVisibleFondo + " He activado setIsVisibleFondo ");
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`flex flex-col h-screen ${!isVisibleFondo ? "hidden h-0 z-0" : "flex"}`}>
          <motion.div
      className={`fixed top-0 left-0 w-full h-[33vh] bg-paper-texture z-40 ${
        !isVisibleFondo ? "hidden" : ""
      }`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isAnimatingLeRev ? 0 : 1 }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 5,
      }}
      style={{ transformOrigin: "left" }} // Cambia el origen de la transformación
    ></motion.div>
    <motion.div
      className={`fixed top-[33%] left-0 w-full h-[33vh] bg-paper-texture z-40 ${
        !isVisibleFondo ? "hidden" : ""
      }`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isAnimatingLeRev ? 0 : 1 }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 5,
      }}
      style={{ transformOrigin: "right" }} // Cambia el origen de la transformación
    >
      
      <div
        id="Entrada"
        className={`fixed w-full h-full flex justify-center items-center ${
          !isVisibleFondo ? "hidden" : ""
        }`}
      >
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={` font-sans relative   underlinecartawhite  z-40  text-5xl text-[#3fb4c4]  
            ${!isVisibleFondo ? "hidden" : ""}`}
        >
          LeRomer
        </motion.p>
        <div>{/* Contenido adicional */}</div>
      </div>
    </motion.div>
    <motion.div
      className={`fixed top-[66%] left-0 w-full h-[33vh] bg-paper-texture z-40 ${
        !isVisibleFondo ? "hidden" : ""
      }`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isAnimatingLeRev ? 0 : 1 }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 5,
      }}
      style={{ transformOrigin: "left" }} // Cambia el origen de la transformación
    ></motion.div>
    </main>
  );
};

export default FullScreenAnimation;
