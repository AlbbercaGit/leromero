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
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleFondo(false);
      console.log("He activado setIsVisibleFondo ");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
    className="fixed top-0 left-0 w-full h-full bg-black z-40"
    initial={{ scaleY: 1 }}
    animate={{ scaleY: isAnimating ? 1 : 0 }}
    transition={{
      type: "spring",
      damping: 20,
      duration: 5,
    }}
    style={{ transformOrigin: "top " }} // Cambia el origen de la transformación
  >
    <div
      className={`fixed flex justify-center items-center w-full  h-full z-30 ${
        !isVisibleFondo ? "hidden" : ""
      }`}
    >
      <motion.p
       initial={{ opacity: 1, scale: 1 }}
       animate={{ opacity: 0, scale: 1 }}
       transition={{
         duration: 0.25,
         delay: 0.9,
         ease: [0, 0.71, 0.2, 1.01]
       }}
        className={`font-sans relative   underlinecartawhite  z-40  text-5xl text-white ${
          !isVisibleFondo ? "hidden" : ""
        }`}
      >
        LeRomer
      </motion.p>

      <div></div>
    </div>
    </motion.div>

  );
};

export default FullScreenAnimation;
