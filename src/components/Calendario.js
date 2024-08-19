import React, { useState } from "react";
import { Calendar } from "@nextui-org/calendar";
import { Button } from "@nextui-org/button";
import AnimacionSalida from "./AnimacionSalida";
import Formulario from "./Formulario.js";
import style from "../style.css";
import { MdOutlineTableRestaurant } from "react-icons/md";

const Calendario = () => {
  const [isFormularioVisible, setIsFormularioVisible] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [count, setCount] = useState(1);
  const [zona, setZona] = useState("");
  const [turno, setTurno] = useState("");
  const [fecha, setFecha] = useState(null); // Nuevo estado para la fecha
  const [vision, setVision] = useState("hidden"); // Nuevo estado para la fecha
  const [visionPrincipal, setVisionPrincipal] = useState("Flex"); // Nuevo estado para la fecha

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    // emailConfirm: "",
    telefono: "",
  });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);
  const handleButtonClick = () => setIsCalendarVisible(!isCalendarVisible);
  const handleButtonClick2 = () => setVision(!vision);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (selectedDate) => {
    setFecha(selectedDate); // Actualiza la fecha seleccionada
    setVision("flex");
  };
  // Extraer día, mes y año del objeto fecha si no es null
  const day = fecha?.day;
  const month = fecha?.month;
  const year = fecha?.year;
  const formattedDate = fecha ? `${year}/${month}/${day}` : ""; // Formatear la fecha como DD/MM/YYYY solo si fecha no es null

  const toggleFormularioVisibility = () => {
    setIsFormularioVisible(!isFormularioVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedData = {
      ...formData,
      numero_personas: count,
      zona,
      turno,
      fecha: formattedDate, // Usar la fecha formateada
    };
    console.log("Datos enviados:", combinedData); // Agregar console.log aquí

    try {
      const response = await fetch(
        "http://localhost:3001/reservas/reservas-completas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(combinedData),
        }
      );
      if (response.ok) {
        alert("Reserva creada con éxito");
      } else {
        const errorText = await response.text();
        console.error("Error en la respuesta:", errorText);
        alert("Error al crear la reserva: " + errorText);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en el servidor: " + error.message);
    }
  };

  return (
    <main
      className={`h-auto flex flex-col justify-center items-center text-[#369daa] bg-paper-texture font-sans`}
      id="Calendario"
    >
      {" "}
      <AnimacionSalida />
      <div
        className={`min-h-[80vh] w-full ${
          !vision ? "hidden" : "flex"
        } flex-col justify-center items-center italic gap-5`}
      >
        <div className="h-[10vh] flex items-center justify-center">
          <h2 className="text-center font-light underlinecarta text-2xl w-full text-[#ff9234]">
            ¿Te apetece pasarte un rato?
          </h2>
        </div>
        <div className="px-2 flex h-[6vh] w-[85%] space-x-1 items-center justify-center rounded-2xl  border border-[#369daa] font-sans font-light text-sm">
          <p className="w-4/5">¿Cuantos Seremos?</p>
          <Button
            isIconOnly
            className="text-[#369daa] bg-transparent p-0 m-0 text-xl"
            size="md"
            onClick={decrement}
          >
            -
          </Button>
          <input
            value={count}
            className="text-[#ff9234] pointer-events-none bg-paper-texture w-5 text-center read-only border-none"
            readOnly
          />
          <Button
            isIconOnly
            className="text-[#369daa] p-0 m-0 bg-transparent text-xl"
            size="md"
            onClick={increment}
          >
            +
          </Button>
        </div>
        <div className="px-2 flex h-[6vh] w-[85%] space-x-1 items-center justify-center rounded-2xl  border border-[#369daa] font-sans font-light text-sm">
          <p className="w-full">¿Donde comemos?</p>
          <Button
            className="w-auto text-[#ff9234] bg-transparent flex text-base p-0 mx-0"
            size="sm"
            onClick={() => setZona("Terraza")}
          >
            <p className="underline-button flex justify-center text-sm items-center p-0 mx-0">
              Terraza
            </p>
          </Button>
          <Button
            className="w-auto bg-transparent text-[#ff9234] flex p-0 mx-0"
            size="sm"
            onClick={() => setZona("Salón")}
          >
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Salón
            </p>
          </Button>
        </div>
        <div className="px-2 flex h-[6vh] w-[85%] space-x-1 items-center justify-center rounded-2xl  border border-[#369daa] font-sans font-light text-sm">
          <p className="w-full">¿En que turno?</p>
          <Button
            className="w-auto p-0 mx-0 text-[#ff9234] bg-transparent flex text-sm"
            size="sm"
            onClick={() => {
              handleButtonClick();
              setTurno("Comida");
            }}
          >
            <p className="underline-button flex justify-center items-center gap-2">
              Comida
            </p>
          </Button>
          <Button
            className="w-auto text-[#ff9234] p-0 bg-transparent flex"
            size="sm"
            onClick={() => {
              handleButtonClick();
              setTurno("Cena");
            }}
          >
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Cena
            </p>
          </Button>
          <Button
            className="w-auto bg-transparent text-[#ff9234] flex p-0 mx-0"
            size="sm"
            onClick={handleButtonClick}
          >
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Ver Todo
            </p>
          </Button>
        </div>
        <div className="h-auto flex w-[85%] items-center justify-center rounded font-sans font-light text-xs">
          <p className="w-full flex justify-center text-center ">
            Si viene con un niño y necesita trona añadalo como una persona más.
          </p>
        </div>
        <div
          className={`p-0 m-0 ${
            isCalendarVisible ? "flex" : "hidden"
          } w-full h-[35vh] items-center justify-center rounded font-sans font-light text-base`}
        >
          <Calendar
            className="h-[35vh]"
            aria-label="Date (No Selection)"
            onChange={handleDateChange}
          />
        </div>
        <div
          className={`py-1 mb-5 ${
            isCalendarVisible ? "flex" : "hidden"
          } w-3/5 flex-col items-center rounded font-sans font-light text-sm`}
        >
          <p className="w-full flex text-left">Tenemos hueco</p>
          <p className="w-full flex text-center">Me temo que hoy no</p>
        </div>
        <Button
          className={`w-auto bg-transparent text-base text-[#ff9234] p-0 mx-0 ${
            isCalendarVisible && fecha ? "flex" : "hidden"
          }`}
          size="sm"
          onClick={handleButtonClick2}
        >
          {" "}
          <p className="underline-button flex justify-center text-sm items-center p-0 mx-0">
            Continuar
          </p>
        </Button>
      </div>
      <div className="w-4/5 flex">
      <Button
        className={`w-auto bg-transparent ${
          !vision ? "flex" : "hidden"
        } text-base text-[#ff9234] p-0 mx-0`}
        size="sm"
        onClick={handleButtonClick2}
      >
        <p className="underline-button flex justify-center text-sm items-center p-0 mx-0">
        &lt; Volver
        </p>
      </Button>
      </div>

      <Formulario
        formData={formData}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
        visibilidad={vision ? "hidden" : "flex"}
      />
    </main>
  );
};

export default Calendario;
