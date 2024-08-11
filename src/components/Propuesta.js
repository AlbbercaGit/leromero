import React from "react";
import { Image } from "@nextui-org/image";

const Visitanos = () => {
  return (
    <main>
      <div className=" w-full h-[50vh] flex justify-evenly items-center flex-col font-sans">
        <div className=" w-4/5 flex justify-center items-center text-center flex-col">
          <h2 className="text-center font-light mb-5 underlinecarta text-3xl  w-auto">Nuestra propuesta</h2>
          <p className="p-2">
            Te invitamos a descubrir los auténticos sabores de nuestra tierra,
            donde cada plato cuenta una historia y cada bocado es un viaje.
            Sumérgete en esta experiencia que combina lo mejor de la cocina
            local con un toque moderno.
          </p>
          <p className="w-auto flex justify-center  text-xl items-center underlinecarta">Carta</p>

        </div>
        <div className=" w-full flex justify-center items-center text-center flex-col">
          <h2 className="w-full flex justify-center items-center text-center font-light    text-2xl ">
            Tu mesa te espera</h2>

          <p className="w-3/5  flex justify-center items-center text-center   font-light mb-5  text-3xl">Siente la diferencia</p>
          <p className="w-auto flex justify-center items-center text-xl underlinecarta">Reservar</p>

        </div>
      </div>
    </main>
  );
};

export default Visitanos;
