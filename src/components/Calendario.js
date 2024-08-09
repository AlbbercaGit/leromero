import React from "react";
import { Calendar } from "@nextui-org/calendar";
// import {Select, SelectItem} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, ButtonGroup } from "@nextui-org/button";
import { parseDate } from "@internationalized/date";
// import { Input } from "@nextui-org/input";
import style from "../style.css";
import { MdOutlineTableRestaurant } from "react-icons/md";

const Calendario = () => {
  const animals = [
    { key: "dog", label: "Dog" },
    { key: "cat", label: "Cat" },
    { key: "bird", label: "Bird" },
    // Agrega más animales según sea necesario
  ];

  return (
    <main className="h-[100vh] flex flex-col justify-center items-center bg-paper-texture font-sans "id="Calendario">
      <div className="h-full w-full flex flex-col justify-center items-center italic gap-2 ">
        <h2 className="text-center font-light mb-10 underlinecarta text-3xl  w-full">
          ¿Te apetece pasarte un rato?
        </h2>
        <div className=" px-2 flex w-4/5 items-center justify-center rounded border  border-black font-sans font-light text-base ">
          <p className=" w-4/5">¿Cuantos Seremos?</p>
          <Button
            isIconOnly
            className=" bg-transparent p-0 m-0 text-xl "
            size="md"
          >
            -
          </Button>
          <input
            defaultValue="1"
            className="pointer-events-none bg-paper-texture w-5  text-center read-only border-none"
            X
          ></input>
          <Button
            isIconOnly
            className="  p-0 m-0  bg-transparent text-xl"
            size="md"
          >
            +
          </Button>
        </div>
        <div className=" px-2 flex w-4/5 items-center justify-center rounded border border-black font-sans font-light text-base ">
          <p className="w-3/5">¿Donde comemos?</p>
          <Button className="w-auto bg-transparent flex text-base" size="sm">
            <p className=" underline-button flex justify-center text-sm items-center gap-2">
              Terraza
            </p>
          </Button>
          <Button className="w-auto bg-transparent flex " size="sm">
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Salón
            </p>
          </Button>
        </div>
        <div className=" px-2 flex w-4/5 items-center justify-center rounded border border-black font-sans font-light text-base ">
          <p className="w-3/5">¿En que turno?</p>
          <Button className="w-auto p-0 bg-transparent flex text-sm" size="sm">
            <p className=" underline-button flex justify-center items-center gap-2">
              Comida
            </p>
          </Button>
          <Button className="w-auto p-0 bg-transparent flex " size="sm">
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Cena
            </p>
          </Button>
          <Button className="w-[38%] bg-transparent flex m-0" size="sm">
            <p className="underline-button flex justify-center text-sm items-center gap-2">
              Ver Todo
            </p>
          </Button>
        </div>
        <div className=" px-2 flex w-4/5 items-center justify-center rounded  font-sans font-light text-base ">
          <p className="w-full flex justify-center text-center">
            Si viene con un niño y necesita trona añadalo como una persona más.
          </p>
        </div>
        <div className=" px-2 flex w-4/5  items-start justify-start rounded  font-sans font-light text-base ">
        <h2 className="text-center font-light mb-2 underlinecarta text-2xl  w-full">
          ¿Que dia?
        </h2>
        </div>
        <div className=" px-2 flex h-auto items-center justify-center rounded font-sans font-light text-base ">
          <Calendar className="" aria-label="Date (No Selection)" />
        </div>
        <div className=" px-2 flex w-3/5 flex-col items-center  rounded  font-sans font-light text-base ">
          <p className="w-full flex  text-left">
            Tenemos hueco
          </p>
          <p className="w-full flex text-center">
            Me temo que hoy no
          </p>
          
        </div>
      </div>
    </main>
  );
};

export default Calendario;
