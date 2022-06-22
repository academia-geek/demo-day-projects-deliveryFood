CREATE DATABASE rapidisimo WITH
OWNER = 'postgres'
ENCODING = 'UTF8';


--Eliminacion de tablas---
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS pago;
DROP TABLE IF EXISTS direccion;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS establecimiento;
DROP TABLE IF EXISTS itemproducto;


--Eliminacion de enumeracion
DROP TYPE IF EXISTS tipo;

--Creacion de enumeraciones
CREATE TYPE enum_tipo AS ENUM('Administrador','Usuario');

---Creacion de Tablas-----

CREATE TABLE usuario(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    tipo enum_tipo NOT NULL,
    email VARCHAR(255) NOT NULL,
    infoDePago VARCHAR(255) NOT NULL,
);

INSERT INTO usuario (nombre,apellido,telefono,tipo,email,infoDePago) VALUES ('Juan','Hoyos','3138134783','Usuario','juanhoyos@gmail.com','efectivo');

CREATE TABLE pago(
    id SERIAL PRIMARY KEY,
    metodoPago VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    cantidad VARCHAR(255) NOT NULL,
);

INSERT INTO pago (metodoPago,fecha,cantidad) VALUES ('debito','20/01/2022','50000');


CREATE TABLE pedido(
    codigoOrden SERIAL PRIMARY KEY,
    impuestos VARCHAR(100) NOT NULL,
    tipoEntrega VARCHAR(100) NOT NULL,
    valorDomicilio VARCHAR(255) NOT NULL,
    estadoDelPedido , ---QUE TIPO DE DATO ES estadoDelPedido
    codigoDescuento VARCHAR(255) NOT NULL,
    hora TIME NOT NULL,
    fecha DATE NOT NULL,
    valorTotal VARCHAR(255) NOT NULL,
    descuento VARCHAR(255) NOT NULL,
    usuario INTEGER,
    pago INTEGER,
    CONSTRAINT fk_usuario
        FOREIGN KEY (usuario) REFERENCES usuario (id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
    CONSTRAINT fk_pago
        FOREIGN KEY (pago) REFERENCES PAGO (id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

--ALTER TABLE direccion ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario) 
--    REFERENCES usuario (id) ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO pedido (impuestos,tipoEntrega,valorDomicilo,estadoDelpedido,codigoDescuento,hora,fecha,valorTotal,descuento,usuario) VALUES ('19','Domicilo','5000','ENTREGA','HYTG','13:00:59','31/12/2022','60000','21',1,1);


CREATE TABLE direccion(
    descripcion VARCHAR(100) PRIMARY KEY,
    numeroCasa VARCHAR(100) NOT NULL,
    nomenclatura VARCHAR(100) NOT NULL,
    nombreBarrio VARCHAR(255) NOT NULL,
    latitud  NUMERIC(10,8), ---QUE TIPO DE DATO ES latitud
    longitud  NUMERIC(10,8), ---QUE TIPO DE DATO ES  longitud
    unidad VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    usuario INTEGER,
    CONSTRAINT fk_usuario
        FOREIGN KEY (usuario) REFERENCES usuario (id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);
INSERT INTO direccion (descripcion,numeroCasa,nomenclatura,nombreBarrio,latitud,longitud,unidad,ciudad,tipo,usuario)
VALUES ('2 piso','33','A','Fatima','19.1571124','19.4875414','3','Cali','Casa',1);

CREATE TABLE item_pedido(
    id SERIAL PRIMARY KEY,
    opciones VARCHAR(100) NOT NULL,
    cantidad VARCHAR(100) NOT NULL,
    instrucciones VARCHAR(255) NOT NULL,
    precio VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    pedido INTEGER,
    CONSTRAINT fk_pedido
        FOREIGN KEY (pedido) REFERENCES pedido (codigoOrden)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

INSERT INTO item_pedido (opciones,cantidad,instrucciones,precio,item,pedido)
VALUES ('','4','','5450','',1);


CREATE TABLE establecimiento(
    id SERIAL PRIMARY KEY,
    estado VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    operacional VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    pedido INTEGER,
    CONSTRAINT fk_pedido
        FOREIGN KEY (pedido) REFERENCES pedido (codigoOrden)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

INSERT INTO establecimiento (estado,tipo,operacional,nombre,descripcion,direccion,pedido)
VALUES ('','','','','','',1);