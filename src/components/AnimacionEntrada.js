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
      console.log("He activado setIsVisibleFondo");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full bg-black z-40 ${
        !isVisibleFondo ? "hidden" : ""
      }`}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: isAnimatingLeRev ? 0 : 1 }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 5,
      }}
      style={{ transformOrigin: "top" }} // Cambia el origen de la transformación
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
        duration: 0.7,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      }}
          className={` font-sans relative   underlinecartawhite  z-40  text-5xl text-white  ${
            !isVisibleFondo ? "hidden" : ""
          }`}
        >
          LeRomer
        </motion.p>
        <div>{/* Contenido adicional */}</div>
      </div>
    </motion.div>
  );
};

export default FullScreenAnimation;
