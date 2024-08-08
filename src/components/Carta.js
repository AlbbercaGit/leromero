import React from "react";
import "../style.css"; // Asegúrate de tener este archivo para estilos personalizados

const Carta = () => {
  return (
    <main className="my-10 p-8 bg-paper-texture text-black font-sans border-b">
      <div className="container mx-auto">
        {/* Sección "Picoteamos algo antes?" */}
        <div className="mb-4">
          <h2 className="text-center font-light mb-10 underlinecarta text-3xl italic w-full">
            Picoteamos algo antes?
          </h2>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Tabla de Jamon
              <br />
              <p className="font-thin fontlig text-sm">
                Una tabla de jamon que esperabas?
              </p>
            </span>
            <span className="price">2€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Patatas LeRomer
              <br />
              <p className="font-light text-sm">
                Patatas a lo pobre con nuestra salsa secreta y cientos de cosas más.
              </p>
            </span>
            <span className="price">3€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Degustacion De Quesos
              <br />
              <p className="font-light text-sm">
                Tabla de quesos franceses, italianos y de nuestra tierra.
              </p>
            </span>
            <span className="price">5€</span>
          </div>
        </div>

        {/* Sección "Verde Y Fresco" */}
        <div className="mb-4">
          <h2 className="text-center w-full items-center font-light my-8 underlinecarta text-3xl italic ">
            Verde Y Fresco
          </h2>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Ensalada de Burrata con Limón
              <br />
              <p className="font-light text-sm">
                Burrata fresca con un toque de limón y albahaca.
              </p>
            </span>
            <span className="price">7€</span>
          </div>
        </div>

        {/* Sección "Que no hay huevos?" */}
        <div className="mb-4">
        <h2 className="text-center w-full items-center font-light my-8 underlinecarta text-3xl italic ">
        Que no hay huevos?
          </h2>
          <div className="price-container mb-3 text-2xl ">
            <span className="pr-4 ">
              Huevo poche trufado y salsa de setas
              <br />
              <p className="font-light text-sm">
                Huevo pochado con trufa y una suave salsa de setas.
              </p>
            </span>
            <span className="price">8€</span>
          </div>
        </div>

        {/* Sección "Seguimos Compartiendo o cada uno a lo suyo?" */}
        <div className="mb-4">
        <h2 className="text-center w-full items-center font-light my-8 underlinecarta text-3xl italic ">
        Seguimos Compartiendo o cada uno a lo suyo?
          </h2>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Croquetas de cecina y queso azul
              <br />
              <p className="font-light text-sm">
                Deliciosas croquetas rellenas de cecina y queso azul.
              </p>
            </span>
            <span className="price">9€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Mollete de Carilleras Orientales
              <br />
              <p className="font-light text-sm">
                Mollete relleno de carilleras con un toque oriental.
              </p>
            </span>
            <span className="price">10€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Morro de Pulpo
              <br />
              <p className="font-light text-sm">
                Pulpo a la parrilla con especias mediterráneas.
              </p>
            </span>
            <span className="price">12€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Alcachofas cecina y foie
              <br />
              <p className="font-light text-sm">
                Alcachofas tiernas con cecina y foie.
              </p>
            </span>
            <span className="price">11€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Alitas de pollo rebozadas
              <br />
              <p className="font-light text-sm">
                Alitas crujientes con un toque especial.
              </p>
            </span>
            <span className="price">6€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Mar y montaña de chipirón y Papada
              <br />
              <p className="font-light text-sm">
                Combinación perfecta de chipirón y papada de cerdo.
              </p>
            </span>
            <span className="price">14€</span>
          </div>
        </div>

        {/* Sección "Rematamos y ya lo tenemos Bien" */}
        <div className="mb-4">
        <h2 className="text-center w-full items-center font-light my-8 underlinecarta text-3xl italic ">
        Rematamos y ya lo tenemos Bien
          </h2>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Lomo alto de vaca
              <br />
              <p className="font-light text-sm">
                Jugoso lomo alto de vaca a la parrilla.
              </p>
            </span>
            <span className="price">20€</span>
          </div>
          <div className="price-container mb-3 text-2xl pr-4">
            <span className="pr-4">
              Abanico ibérico de Bellota y Chimichurri
              <br />
              <p className="font-light text-sm">
                Abanico ibérico con chimichurri casero.
              </p>
            </span>
            <span className="price">25€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Bacalao y manitas
              <br />
              <p className="font-light text-sm">
                Bacalao confitado con manitas de cerdo.
              </p>
            </span>
            <span className="price">22€</span>
          </div>
        </div>

        {/* Sección "Y para el niño que tenéis?" */}
        <div className="mb-4">
        <h2 className="text-center w-full items-center font-light my-8 underlinecarta text-3xl italic ">
        Y para el niño que tenéis?
          </h2>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Llonganises de Emilio
              <br />
              <p className="font-light text-sm">
                Llonganises artesanas de la casa Emilio.
              </p>
            </span>
            <span className="price">5€</span>
          </div>
          <div className="price-container mb-3 text-2xl">
            <span className="pr-4">
              Varitas de merluza
              <br />
              <p className="font-light text-sm">
                Varitas crujientes de merluza fresca.
              </p>
            </span>
            <span className="price">6€</span>
          </div>
          <div className="price-container  text-2xl">
            <span className="pr-4">
              Tortilla de lo que quieras 
              <br />
              <p className="font-light text-sm">
                Tortilla personalizada con patatas fritas.
              </p>
            </span>
            <span className="price">7€</span>
            
          </div>
          <span className="mt-10 text-xl  font-semibold">
              Todo Con Patatas Fritas*
             </span>
        </div>
       
            
          
      
      </div>

    
    
      <footer className="text-center mt-4 text-sm text-gray-500">
        &copy; 2024 Mi Proyecto. Todos los derechos reservados.
      </footer>
    </main>
  );
};

export default Carta;
