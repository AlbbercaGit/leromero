import React from "react";
// import { Image } from "@nextui-org/image";
import { Link, Route, Routes } from "react-router-dom";

const Visitanos = () => {
  return (
    <main>
      <div className=" w-full h-[75vh] flex justify-evenly items-center flex-col font-sans">
        <div className=" w-4/5  h-[40vh] flex justify-center items-center text-center flex-col">
          <h2 className="text-center font-light mb-5 underlinecarta text-3xl  w-auto">
            Nuestra propuesta
          </h2>
          <p className="p-2 mb-5">
            Te invitamos a descubrir los auténticos sabores de nuestra tierra,
            donde cada plato cuenta una historia y cada bocado es un viaje.
            Sumérgete en esta experiencia que combina lo mejor de la cocina
            local con un toque moderno.
          </p>
          <Link to="/Carta">

          <p className="w-auto flex justify-center  text-xl items-center underlinecarta font-bold">
            Carta
          </p>
          </Link>
        </div>
        <div className=" w-full h-[40vh] flex justify-center items-center text-center flex-col">
          <h2 className="w-full flex justify-center items-center text-center font-light    text-2xl ">
            Tu mesa te espera
          </h2>

          <p className="w-auto  flex justify-center items-center text-center   font-light mb-5  text-3xl">
            Siente la diferencia
          </p>
          <Link to="/Calendario">
            <p className="w-auto flex justify-center items-center text-xl underlinecarta font-bold">
              Reservar
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Visitanos;
