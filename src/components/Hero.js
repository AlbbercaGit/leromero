import React, { useEffect } from "react";
// import Video from "./VideoBackground";
// import Videom from "./VideoBackgroundm";

const Hero = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".underline-button2");
    buttons.forEach(button => {
      button.classList.add("active");
    });
  }, []);

  return (
    <main className="max-h-[100vh]">
      <div className=" h-[100vh] text-white w-full flex items-center justify-center flex-col  relative top-0 font-sans">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <h1 className="text-white text-5xl flex h-full w-full items-end justify-center m-10">
            ¿Y ahora que?
          </h1>
          <nav className="text-white flex h-full w-full justify-center items-start text-4xl gap-10">
            <button className="font-sans py-2 px-4 underline-button2">Reservas</button>
            <button className="font-sans py-2 px-4 underline-button2">Carta</button>
          </nav>
          <div className="flex flex-col h-full w-full items-center justify-center text-xl bg-repeat-x ">
            <p className="h-full text-center flex justify-center items-center">¿Comemos? <br></br>V</p>
            {/* <p className="h-full">V</p> */}
          </div>
          <div className="flex flex-col h-2/5 w-full items-center justify-start text-xl bg-repeat-x bg-gradient">

          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
