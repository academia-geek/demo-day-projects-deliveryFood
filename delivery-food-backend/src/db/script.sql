CREATE DATABASE rapidisimo WITH
OWNER = 'postgres'
ENCODING = 'UTF8';


--Eliminacion de tablas---
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS pago;
DROP TABLE IF EXISTS direccion;
DROP TABLE IF EXISTS establecimiento;
DROP TABLE IF EXISTS itemproducto;


--Eliminacion de enumeracion
DROP TYPE IF EXISTS tipo;

--Creacion de enumeraciones
CREATE TYPE enum_tipo AS ENUM('Administrador','N');

---Creacion de Tablas-----

CREATE TABLE Usuario(
    id SERIAL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    tipo enum_tipo NOT NULL,
    email VARCHAR(255) NOT NULL,
    infoDePago VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);