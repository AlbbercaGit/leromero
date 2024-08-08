import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
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
    [0, SECTION_HEIGHT * 3],
    [25, 0]
  );
  const clip2 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT * 3],
    [75, 100]
  );

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax");
      const scrollPosition = window.pageY;
      parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full h-[380vh] bg-paper-texture">
      <motion.div
        className="sticky top-0 h-screen w-full parallax bg-izq bg-cover bg-center bg-no-repeat"
        style={{
          clipPath,
          willChange: "clip-path, opacity",
        }}
      ></motion.div>
    </main>
  );
};

export default Sticky;
