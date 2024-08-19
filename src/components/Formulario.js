import React from "react";
import { Input, useInput } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const Formulario = ({
  formData,
  handleFormChange,
  handleSubmit,
  visibilidad,
}) => {
  return (
    <main
      className={`min-h-[55vh] w-full items-center justify-center flex-col  ${visibilidad}`}
    >
              <div className="h-[10vh] w-4/5 flex items-center">
          <h2 className="text-2xl text-[#48bbca] font-sans font-bold">
            LeRomer
          </h2>
        </div>
      <div
        className="h-full w-4/5 flex flex-col justify-center items-center bg-transparent gap-4 font-sans italic "
        id="Formulario"
      >

        <Input
          variant="bordered"
          type="text"
          name="nombre"
          label="Nombre"
          value={formData.nombre}
          onChange={handleFormChange}
          classNames={{
            inputWrapper: [
              "border-[#48bbca]",
              "border-[1px]",
              "!hover:border-[#48bbca]",
              "hover:text-[#369daa]",
              "focus:border-[#48bbca]",
              "focus:text-[#369daa]",
              "shadow-lg",
              "group-data-[focus=true]:border-[#48bbca]",
              "group-data-[focus=true]:text-[#369daa]", // Asegúrate de que el borde cambie en el estado de enfoque
              // Asegúrate de que el borde cambie en el estado de enfoque
            ],
            label: [
              "!text-[#369daa]", // Asegúrate de que el texto de la etiqueta sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
              "group-data-[focus=false]:text-[#369daa]",
              // "!text-blue-500",
            ],
            input: [
              "text-[#369daa]", // Asegúrate de que el texto sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
            ],
          }}
        />{" "}
        <Input
          type="text"
          name="apellidos"
          label="Apellidos"
          value={formData.apellidos}
          onChange={handleFormChange}
          variant="bordered"
          classNames={{
            inputWrapper: [
              "border-[#48bbca]",
              "hover:border-[#48bbca]",
              "border-[1px]",
              "hover:text-[#369daa]",
              "focus:border-[#48bbca]",
              "focus:text-[#369daa]",
              "shadow-lg",
              "group-data-[focus=true]:border-[#48bbca]",
              "group-data-[focus=true]:text-[#369daa]", // Asegúrate de que el borde cambie en el estado de enfoque
              // Asegúrate de que el borde cambie en el estado de enfoque
            ],
            label: [
              "!text-[#369daa]", // Asegúrate de que el texto de la etiqueta sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
              "group-data-[focus=false]:text-[#369daa]",
              // "!text-blue-500",
            ],
            input: [
              "text-[#369daa]", // Asegúrate de que el texto sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
            ],
          }}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleFormChange}
          variant="bordered"
          classNames={{
            inputWrapper: [
              "border-[#48bbca]",
              "hover:border-[#48bbca]",
              "hover:text-[#369daa]",
              "border-[1px]",
              "focus:border-[#48bbca]",
              "focus:text-[#369daa]",
              "shadow-lg",
              "group-data-[focus=true]:border-[#48bbca]",
              "group-data-[focus=true]:text-[#369daa]", // Asegúrate de que el borde cambie en el estado de enfoque
              // Asegúrate de que el borde cambie en el estado de enfoque
            ],
            label: [
              "!text-[#369daa]", // Asegúrate de que el texto de la etiqueta sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
              "group-data-[focus=false]:text-[#369daa]",
              // "!text-blue-500",
            ],
            input: [
              "text-[#369daa]", // Asegúrate de que el texto sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
            ],
          }}
        />
        <Input
          type="email"
          name="emailConfirm"
          label="Vuelva a introducir su Email."
          value={formData.emailConfirm}
          onChange={handleFormChange}
          variant="bordered"
          classNames={{
            inputWrapper: [
              "border-[#48bbca]",
              "hover:border-[#48bbca]",
              "hover:text-[#369daa]",
              "border-[1px]",
              "focus:border-[#48bbca]",
              "focus:text-[#369daa]",
              "shadow-lg",
              "group-data-[focus=true]:border-[#48bbca]",
              "group-data-[focus=true]:text-[#369daa]", // Asegúrate de que el borde cambie en el estado de enfoque
              // Asegúrate de que el borde cambie en el estado de enfoque
            ],
            label: [
              "!text-[#369daa]", // Asegúrate de que el texto de la etiqueta sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
              "group-data-[focus=false]:text-[#369daa]",
              // "!text-blue-500",
            ],
            input: [
              "text-[#369daa]", // Asegúrate de que el texto sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
            ],
          }}
        />
        <Input
          type="tel"
          name="telefono"
          label="Numero de telefono"
          value={formData.telefono}
          onChange={handleFormChange}
          variant="bordered"
          classNames={{
            inputWrapper: [
              "border-[#48bbca]",
              "hover:border-[#48bbca]",
              "hover:text-[#369daa]",
              "border-[1px]",
              "focus:border-[#48bbca]",
              "focus:text-[#369daa]",
              "shadow-lg",
              "group-data-[focus=true]:border-[#48bbca]",
              "group-data-[focus=true]:text-[#369daa]", // Asegúrate de que el borde cambie en el estado de enfoque
              // Asegúrate de que el borde cambie en el estado de enfoque
            ],
            label: [
              "!text-[#369daa]", // Asegúrate de que el texto de la etiqueta sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",
              "group-data-[focus=false]:text-[#369daa]",
              
              // "!text-blue-500",
            ],
            input: [
              "text-[#369daa]", // Asegúrate de que el texto sea naranja en el estado normal
              "focus:text-[#369daa]",
              "group-data-[focus=true]:text-[#369daa]",

            ],
          }}
        />
        <div className=" w-full flex">
          <Button
            className="w-auto bg-transparent flex text-base p-0 mx-0 text-[#ff9234] "
            size="sm"
            onClick={handleSubmit}
          >
            <p className=" underlinecarta  flex justify-center text-sm items-center p-0 mx-0">
              Reservar
            </p>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Formulario;
