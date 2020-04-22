# TODO list in react + node

## Instalación

### Requerimientos

Se debe tener node instalado y se debe tener una base de datos mysql, la cual será definida en el archivo ".env".

### Dependencias

#### Globales

Se requiere tener knex. Corre el comando en una terminal:

`npm i knex -g`

#### Del proyecto
Abre dos terminales en la carpeta principal y en una corre:

`cd ldaw-react-todo && npm install`

En la otra corre:

`cd ldaw-todo-list && npm install && knex migrate:latest`

### Entorno

El servidor usa el puerto 3001 por default. Es necesario agregar un archivo llammado ".env" a la carpeta "ldaw-todo-list" que tenga el siguiente contenido:

```
APP_ENV=

EXPRESS_PORT=3001

DB_DEVELOPMENT_HOST=127.0.0.1
DB_DEVELOPMENT_PORT=3306
DB_DEVELOPMENT_NAME=
DB_DEVELOPMENT_USER=
DB_DEVELOPMENT_PASSWORD=

DB_PRODUCTION_HOST=127.0.0.1
DB_PRODUCTION_PORT=3306
DB_PRODUCTION_NAME=
DB_PRODUCTION_USER=
DB_PRODUCTION_PASSWORD=
```

## Correr el proyecto

Se necesitan dos terminales. En la primera corre:

`cd ldaw-react-todo && npm start`

En la segunda corre

`cd ldaw-todo-list && nodemon server.js`

_@DavidGomezChiu_