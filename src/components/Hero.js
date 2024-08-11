import React, { useEffect, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Calendario from "./Calendario";
import Carta from "./Carta";

const Hero = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    // Asegúrate de que el header sea visible al cargar la página
    headerElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // Añade el evento de finalización de animación
    const handleAnimationEnd = () => {
      headerElement.classList.add("hidden"); // Asegura que el elemento quede oculto y no ocupe espacio
    };

    headerElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      headerElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  // Función para manejar el desplazamiento suave
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let offset;
      const windowWidth = window.innerWidth;

      // Ajustar el vh basado en el tamaño de la ventana
      if (windowWidth < 768) {
        // Pantallas pequeñas (móviles)
        offset = window.innerHeight * 0.05; // 15vh
      } else if (windowWidth < 1200) {
        // Pantallas medianas (tabletas)
        offset = window.innerHeight * 0.065; // 10vh
      } else if (windowWidth < 1500) {
        // Pantallas medianas (tabletas)
        offset = window.innerHeight * 0.1; // 10vh
      } else {
        // Pantallas grandes (escritorio)
        offset = window.innerHeight * 0.07; // 5vh
      }

      // Calcular la posición de desplazamiento de forma absoluta
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".underline-button2");
    buttons.forEach((button) => {
      button.classList.add("active");
    });
  }, []);

  return (
    <main className="max-h-[100vh]" id="Hero" ref={headerRef}>
      <div className=" h-[100vh] text-white w-full flex items-center justify-center flex-col  relative top-0 font-sans">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <h1 className="text-white text-3xl flex h-full w-full items-end justify-center m-10">
            ¿Y ahora que?
          </h1>
          <nav className="text-white flex h-full w-full justify-center items-start text-2xl gap-10">
            <Link to="/Calendario">
              <button className="font-sans py-2 px-4 underline-button2">
                Reservas
              </button>
            </Link>
            <Link to="/Carta">
              <button className="font-sans py-2 px-4 underline-button2">
                Carta
              </button>
            </Link>
          </nav>
          <div className="flex flex-col h-full w-full items-center justify-center text-xl bg-repeat-x ">
            <p className="h-full text-center flex justify-center items-center">
              ¿Comemos? <br></br>V
            </p>
          </div>
          <div className="flex flex-col h-2/5 w-full items-center justify-start text-xl bg-repeat-x bg-gradient"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;