CREATE DATABASE deliveryfood WITH
OWNER = 'postgres'
ENCODING = 'UTF8';

--Eliminacion de tablas---
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS pago;
DROP TABLE IF EXISTS direccion;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS establecimiento;

CREATE TYPE enum_tipo AS ENUM('Administrador','Usuario','Repartidor','Establecimiento');
CREATE SEQUENCE usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE;
CREATE TABLE usuario(
    id_usuario INTEGER NOT NULL DEFAULT NEXTVAL('usuario_id_seq'),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono BIGINT NOT NULL,
    tipo enum_tipo NOT NULL,
    estado VARCHAR (20) NOT NULL DEFAULT 'Inactivo',
    email VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (id_usuario));

INSERT INTO usuario (nombre,apellido,telefono,tipo,email) VALUES ('Ingrid','ARgote','5454646','Usuario','ingrid@gmail.com');
INSERT INTO usuario (nombre,apellido,telefono,tipo,email) VALUES ('Armando','Perez','5454646','Establecimiento','tipicos@gmail.com');
INSERT INTO usuario (nombre,apellido,telefono,tipo,email) VALUES ('Gerardo','Pinzon','5454646','Repartidor','domicilios@gmail.com');
INSERT INTO usuario (nombre,apellido,telefono,tipo,email) VALUES ('Catalina','Sanchez','5454646','Administrador','cata@deliveryfood.com');

CREATE TYPE enum_estadoE AS ENUM('ACTIVO','INACTIVO');
CREATE TYPE enum_operacional AS ENUM('S','N');
CREATE SEQUENCE establecimiento_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE;    

CREATE TABLE establecimiento(
    id_establecimiento INTEGER NOT NULL DEFAULT NEXTVAL('establecimiento_id_seq'),
    estado enum_estadoE NOT NULL,  
    operacional enum_operacional NOT NULL,
    nombre VARCHAR(255) NOT NULL UNIQUE, 
    id_menu VARCHAR(50) NOT NULL,
    foto_est VARCHAR(255),
    PRIMARY KEY (id_establecimiento)
);

CREATE TYPE enum_entrega AS ENUM('Domicilio','Retiro');
CREATE TYPE enum_estado AS ENUM('En revisión','Aceptado','Preparando','En camino','Entregado');
CREATE SEQUENCE pedido_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE;

CREATE TABLE pedido(
    codigoOrden BIGINT NOT NULL DEFAULT NEXTVAL('pedido_id_seq'),
    id_usuario BIGINT NOT NULL,    
    id_itempedido VARCHAR(50) NOT NULL,
    impuestos INTEGER NOT NULL,
    tipoEntrega enum_entrega NOT NULL,
    valorDomicilio INTEGER NOT NULL,
    estadoDelPedido enum_estado DEFAULT 'En revisión'
    hora TIME NOT NULL,
    fecha DATE NOT NULL,
    valorTotal INTEGER NOT NULL,
    descuento INTEGER NOT NULL,
    id_establecimiento BIGINT NOT NULL,
<<<<<<< HEAD
<<<<<<< HEAD
    calificacion FLOAT(2),
    id_repartidor BIGINT,
=======
    id_repartidor BIGINT,
    id_calificacion FLOAT(2),
>>>>>>> 5c2341a7f84c306832760ad789ec69fc39a6e8e8
=======
    calificacion FLOAT(2),
    id_repartidor BIGINT,
>>>>>>> f6780aa3c5a7a2b296121f9bc8e637a9a4ec81e5
    PRIMARY KEY (codigoOrden),
    CONSTRAINT fk_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_establecimiento
        FOREIGN KEY (id_establecimiento) REFERENCES establecimiento (id_establecimiento)
<<<<<<< HEAD
<<<<<<< HEAD
        ON DELETE RESTRICT
        ON UPDATE CASCADE
=======
        ON DELETE RESTRICT,
        ON UPDATE CASCADE 
>>>>>>> 5c2341a7f84c306832760ad789ec69fc39a6e8e8
=======
        ON DELETE RESTRICT
        ON UPDATE CASCADE
>>>>>>> f6780aa3c5a7a2b296121f9bc8e637a9a4ec81e5
);

CREATE TYPE enum_metodo AS ENUM('Deposito','Credito','Efectivo');
CREATE SEQUENCE pago_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE;

CREATE TABLE pago(
    id_pago INTEGER NOT NULL DEFAULT NEXTVAL('pago_id_seq'),
    id_usuario INTEGER NOT NULL,
    id_pedido INTEGER NOT NULL,
    id_establecimiento INTEGER,
    metodoPago enum_metodo NOT NULL,
    fecha DATE NOT NULL,
    cantidad INTEGER NOT NULL,
    PRIMARY KEY (id_pago),
    CONSTRAINT fk_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_pedido
    FOREIGN KEY (id_pedido) REFERENCES pedido (codigoOrden)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE SEQUENCE direccion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE;

CREATE TABLE direccion(
    id_direccion  INTEGER NOT NULL DEFAULT NEXTVAL('direccion_id_seq'),
    id_establecimiento INTEGER,
    descripcion VARCHAR(20) NOT NULL,
    direccion VARCHAR(100) NOT NULL,    
    nombreBarrio VARCHAR(255),
    latitud   FLOAT(7) NOT NULL,
    longitud  FLOAT(7) NOT NULL, 
    unidad VARCHAR(100),
    ciudad VARCHAR(100) NOT NULL,
    id_usuario INTEGER,
<<<<<<< HEAD
<<<<<<< HEAD
    PRIMARY KEY (id_direccion)
    );
=======
    PRIMARY KEY (id_direccion)    
);
>>>>>>> 5c2341a7f84c306832760ad789ec69fc39a6e8e8
=======
    PRIMARY KEY (id_direccion)    
);
>>>>>>> f6780aa3c5a7a2b296121f9bc8e637a9a4ec81e5
