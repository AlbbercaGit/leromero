import React from "react";
import { motion, useScroll, useTransform , useMotionTemplate } from "framer-motion";
import "../style.css";

const Sticky = () => {
  const SECTION_HEIGHT = 1000;

  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 100],
    [1, 0]
  );
  
  const clip1 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT *3 ],
    [25, 0]
  );
  const clip2 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT *3],
    [75, 100]
  );

     const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  


  // const backgroundSize = useTransform(
  //   scrollY,
  //   [0, SECTION_HEIGHT + 500],
  //   ["170%", "100%"]
  // );

  return (
    <main className="relative w-full h-[350vh] bg-paper-texture">
      <motion.div
        className="sticky top-0 h-screen w-full  bg-izq bg-cover bg-center bg-no-repeat "
        style={{
          // opacity,
          // clipPath,
          // backgroundSize,
          clipPath: "polygon(50% 25%, 75% 25%, 75% 75%, 25% 75%)",
       clipPath,
          backgroundAttachment: "fixed",
          // backgroundImage: "url(../public/img/limon.jpg)",
        }}
      ></motion.div>
    </main>
  );
};

export default Sticky;
