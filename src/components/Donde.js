import React from "react";
import "../style.css"; // Asegúrate de tener este archivo para estilos personalizados
import Parallax from "./Parallax";

const Donde = () => {
  return (
    <main className="bg-paper-texture  h-[160vh] w-full flex flex-col my-10  bg-paper-texture text-black font-sans ">


      <div className="w-full h-full flex items-center justify-center">
      <div className="bg-izq   bg-cover bg-fixed bg-left bg-no-repeat shadow-2xl w-full rounded-[80px] h-full"></div>
      <p className=" p-5 w-full h-full flex items-center justify-center  font-medium mb-10  text-base italic " >
Disfruta de nuestra terraza: buen ambiente, temperatura agradable y brisa fresca.
 Perfecta para saborear una cerveza en excelente compañía. ¡Te esperamos! 
      </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
      <p className=" p-5 w-full h-full flex items-center justify-center  font-medium mb-10  text-base italic " >
      Nuestro interior es moderno y acogedor, con un ambiente cálido y cercano. Ideal para disfrutar de una comida deliciosa en un espacio íntimo y confortable.
           </p>
           <div className="bg-der   bg-cover bg-fixed bg-left bg-no-repeat shadow-2xl w-full rounded-[80px] h-full"></div>
           </div>
    </main>
  );
};

export default Donde;
