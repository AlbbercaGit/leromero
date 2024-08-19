-- Creación de la tabla Cliente
CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(15) NOT NULL
);

-- Creación de la tabla Zona
CREATE TABLE Zona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    capacidad_maxima INT NOT NULL
);

-- Creación de la tabla Turno
CREATE TABLE Turno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fin TIME NOT NULL
);

-- Creación de la tabla Reserva
CREATE TABLE Reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    zona_id INT NOT NULL,
    turno_id INT NOT NULL,
    numero_personas INT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    FOREIGN KEY (zona_id) REFERENCES Zona(id),
    FOREIGN KEY (turno_id) REFERENCES Turno(id)
);


DELIMITER $$

CREATE TRIGGER verificar_aforo_reserva
BEFORE INSERT ON Reserva
FOR EACH ROW
BEGIN
    DECLARE capacidad_zona INT;
    DECLARE aforo_turno INT;

    -- Obtenemos la capacidad máxima de la zona
    SELECT capacidad_maxima INTO capacidad_zona
    FROM Zona
    WHERE id = NEW.zona_id;

    -- Obtenemos el aforo máximo del turno
    SELECT aforo_maximo INTO aforo_turno
    FROM Turno
    WHERE id = NEW.turno_id;

    -- Verificamos si el número de personas supera la capacidad de la zona
    IF NEW.numero_personas > capacidad_zona THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'La capacidad de la zona no puede ser excedida';
    END IF;

    -- Verificamos si el número de personas supera el aforo del turno
    IF NEW.numero_personas > aforo_turno THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'El aforo máximo del turno no puede ser excedido';
    END IF;
END $$

DELIMITER ;


INSERT INTO Zona (nombre, capacidad_maxima) VALUES ('Terraza', 30);
INSERT INTO Zona (nombre, capacidad_maxima) VALUES ('Salon', 20);


INSERT INTO Turno (nombre, horario_inicio, horario_fin) VALUES ('Comida', '13:00:00', '16:00:00');
INSERT INTO Turno (nombre, horario_inicio, horario_fin) VALUES ('Cena', '20:00:00', '22:00:00');


INSERT INTO Reserva (cliente_id, zona_id, turno_id, numero_personas, fecha)
VALUES (1, 1, 1, 25, '2024-08-17');  -- Aquí, 25 debería estar dentro del límite

INSERT INTO Reserva (cliente_id, zona_id, turno_id, numero_personas, fecha)
VALUES (1, 1, 1, 60, '2024-08-17');  -- Aquí, 60 excede la capacidad máxima de 50
