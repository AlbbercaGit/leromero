import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../style.css";

const Sticky = () => {
  const SECTION_HEIGHT = 1500;

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);
  const backgroundSize = useTransform(scrollY, [0, 500], ["170%", "100%"]);

  return (
    <main className="relative w-full h-[150vh]">
      <motion.div
        className="sticky top-0 h-screen w-full bg-izq bg-cover bg-center bg-no-repeat"
        style={{
          opacity,
        //   backgroundSize,
          backgroundAttachment: "fixed",
          // backgroundImage: "url(../public/img/limon.jpg)",
        }}
      ></motion.div>
    </main>
  );
};

export default Sticky;