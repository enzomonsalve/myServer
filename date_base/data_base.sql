DROP DATABASE integrador;

CREATE database integrador;

USE integrador;

CREATE TABLE producto(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    precio INT(10) NOT NULL,
    marca VARCHAR(15),
    telefono VARCHAR(10)UNIQUE NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    permuta VARCHAR(30), 
    condicion VARCHAR (30),
    imagen VARCHAR (180)
);


USE integrador;
INSERT INTO producto (id,nombre,precio,marca,telefono,direccion,permuta,condicion,imagen)
VALUES (1234,'caja',200,'nike','02995897654','olavine 123','si,por auto','bueno','https://upload.wikimedia.org/wikipedia/commons/3/32/Dessert_Spoon.jpg');

INSERT INTO producto (id,nombre,precio,marca,telefono,direccion,permuta,condicion,imagen)
VALUES (12345,'plato',20,'noze','02995627953','olafui 321','no','malo','https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/plato.jpg.webp?itok=W3zlm_Ou');

SELECT* FROM producto;