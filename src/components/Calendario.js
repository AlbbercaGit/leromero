import React from "react";
import { Calendar } from "@nextui-org/calendar";
// import {Select, SelectItem} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";

import { parseDate } from "@internationalized/date";

const Calendario = () => {

    const animals = [
        { key: 'dog', label: 'Dog' },
        { key: 'cat', label: 'Cat' },
        { key: 'bird', label: 'Bird' },
        // Agrega más animales según sea necesario
      ];
      

  return (
    <main className="h-[60vh] flex flex-col justify-center items-center bg-paper-texture">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Select label="Select an animal" className="max-w-xs">
          {/* {animals.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))} */}
        </Select>
      </div>
      <div className="flex gap-x-4 h-full">
        <Calendar aria-label="Date (No Selection)" />
      </div>
    </main>
  );
};

export default Calendario;
