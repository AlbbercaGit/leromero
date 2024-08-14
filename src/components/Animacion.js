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
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleFondo(false);
      console.log("He activado setIsVisibleFondo ");
    }, 4300);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingLeRev(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timerLe = setTimeout(() => {
      setIsAnimatingLe(false);
    }, 700); // Duración de la animación en milisegundos

    return () => clearTimeout(timerLe);
  }, []);

  useEffect(() => {
    if (!isAnimatingLeRev) {
      setIsVisible(false);
    }
  }, [isAnimating]);

  // useEffect(() => {
  //     if (!isAnimating) {
  //         console.log('He entrado al fondo');
  //         setIsVisibleFondo(false);
  //     }
  // }, [isAnimating]);
  return (
    <motion.div
    className="fixed top-0 left-0 w-full h-full bg-black z-50"
    initial={{ scaleY: 1 }}
    animate={{ scaleY: isAnimating ? 1 : 0 }}
    transition={{
      type: "spring",
      damping: 20,
      duration: 1,
    }}
    style={{ transformOrigin: "top left" }} // Cambia el origen de la transformación
  >
    <div className={`w-full h-full ${!isVisibleFondo ? "hidden" : ""}`}>

      <div>
        <div
          className={`w-full h-full fixed flex justify-center items-center z-50  font-sans text-5xl ${
            !isVisible ? "hidden" : ""
          }`}
        >
           <motion.div
              className="absolute top-0 left-0 w-full h-full  bg-black z-40"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: isAnimatingLe ? 1 : 0 }}
              transition={{
                type: "spring",
                damping: 20,
                duration: 5,
              }}
              style={{ transformOrigin: " right" }}
              // onAnimationComplete={() => setIsAnimatingSecond(true)} // Inicia la segunda animación
              // Cambia el origen de la transformación
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full  bg-black z-50 "
              initial={{ scaleX: 1 }}
              animate={{ scaleX: isAnimatingLeRev ? 0 : 1 }}
              transition={{
                type: "spring",
                damping: 20,
                duration: 5,
              }}
              style={{ transformOrigin: " right" }}
              // onAnimationComplete={() => setIsAnimatingSecond(true)} // Inicia la segunda animación
              // Cambia el origen de la transformación
            />
          <p className={`relative  text-white underlinecartawhite  z-40 ${!isVisible ? "hidden" : ""}`}>
           
            LeRomer
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default FullScreenAnimation;
