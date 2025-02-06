<div> <p style="text-align:center"> <img align="center" src="./public/programador.png" alt="JuveYell" width="300px"> </p> </div> <h2 align="center" style="color:#CD5C5C">JLG'777' <img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="22" /></h2> <p align="center"> <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=4000&pause=1000&multiline=true&random=false&width=435&lines=Un+proyecto+creado+por+J0RG1T0" alt="Typing SVG" /></a> </p> <hr>


## 📧 Conéctate conmigo:

[![GMAIL](https://img.shields.io/badge/Gmail-Gmail?style=white&logo=Gmail&logoColor=white&color=%23EA4335)](proyectojlg777@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-LinkedIn?style=white&logo=LinkedIn&logoColor=white&color=%230A66C2)](https://linkedin.com/in/)
[![Discord](https://img.shields.io/badge/Discord-Discord?style=white&logo=Discord&logoColor=white&color=%235865F2)](jorgeg777#9720)

## 🎫 API de Gestión de Usuarios

_Este proyecto es una API desarrollada con **Node.js**, **TypeScript**, **Express** y **Sequelize**. Permite gestionar usuarios almacenados en una base de datos MySQL._

La API permite operaciones CRUD sobre los usuarios, como crear, obtener, actualizar y eliminar registros.

## 🪢 Características

- **Operaciones CRUD**:

- Crear un nuevo usuario
- Obtener todos los usuarios o por ID
- Actualizar un usuario por ID
- Eliminar un usuario por ID

- **Base de datos MySQL**
 _La información de los usuarios se almacena en una base de datos MySQL._

## 🚀 Comenzando

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Requisitos previos

- Tener **Node.js** y **npm** instalados. Si no los tienes, puedes descargarlos [aquí](https://nodejs.org/)

- Tener MySQL instalado y configurado en tu máquina local o usar una base de datos remota.

## 🔧 Instalación

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

#### 🧍‍♂️ Clonar el repositorio

```bash
Copiar
git clone https://github.com/jlg777/05.apirest-nodejs-ts-express-sequelize.git
```

#### 🚢 Navegar al directorio del proyecto

```bash
Copiar
cd 05.apirest-nodejs-ts-express-sequelize
```

#### 🚨 Instalar dependencias

```bash
Copiar
npm install
```

#### 🛠️ Configuración de la base de datos

Asegúrate de tener una base de datos MySQL llamada usuarios y una tabla usuarios configurada con al menos los siguientes campos:

```sql
Copiar
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  estado BOOLEAN DEFAULT true
);
```

#### 💽 Configuración de las variables de entorno

Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```bash
Copiar
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=usuarios
PORT=3001
```

#### 🪂 Iniciar la aplicación

Para el desarrollo:

```bash
Copiar
npm run dev
Esto iniciará el servidor en http://localhost:3001.
```

Para producción:

```bash
Copiar
npm run build
npm run start
```

#### 🚧 Uso

Una vez que el servidor esté en ejecución, puedes interactuar con la API a través de las siguientes rutas:

##### Rutas disponibles:

- GET /api/usuarios: Devuelve todos los usuarios en formato JSON.
- GET /api/usuarios/:id: Devuelve el usuario correspondiente al ID proporcionado.
- POST /api/usuarios: Crea un nuevo usuario. Los datos deben incluir:
    - nombre: Nombre del usuario
    - email: Correo electrónico del usuario
- PUT /api/usuarios/:id: Actualiza el usuario con el ID proporcionado. Debes enviar los mismos parámetros que en el POST.
- DELETE /api/usuarios/:id: Elimina el usuario con el ID proporcionado.

#### 🧞 Comandos
Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run start` | Preview your build locally, before deploying |
| `npm run lint`  | Lint del código                              |
| `npm run fix`   | Repara errores de linting                    |

### 🚀 Estructura del proyecto
Dentro de tu proyecto verás las siguientes carpetas y archivos:

```text
Copiar
/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── routes/
│   ├── app.ts
│   ├── database.ts
│   ├── index.ts
│   └── server.ts
└── package.json
```

* src/controllers/: Aquí se encuentran los controladores que gestionan la lógica de los endpoints.
* src/db/: Contiene la configuración y conexión a la base de datos MySQL.
* src/models/: Define los modelos de la base de datos, como el de Usuario.
* src/routes/: Contiene las rutas de la API.
* src/app.ts: Configuración de la aplicación Express.
* src/database.ts: Conexión y configuración de Sequelize.
* src/server.ts: Arranque del servidor y conexión a la base de datos.

## 🛠️ Construido con
**Node.js**: Entorno de ejecución de JavaScript.
**Express**: Framework web utilizado para construir la API RESTful.
**TypeScript**: Tipado de datos.
**Sequelize**: ORM para interactuar con la base de datos MySQL.
**MySQL2**: Paquete para interactuar con la base de datos MySQL.
**Morgan**: Middleware para logging HTTP.
**Cors**: Middleware para habilitar CORS.

## ✒️ Autores
**Jorge Grandía** - _Trabajo Inicial_ - [JLG777](https://github.com/jlg777)
**Jorge Grandía** - _Documentación_   - [JLG777](#jlg777)

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE.md para detalles.

## 🎁 Expresiones de Gratitud
- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- Dona con cripto a esta dirección:
    * (btc) 16ApGFxMXfF8ktysSkmLBzLEJPHubtwKjp
    * (btc-SegWit) bc1q0v8fvv3gvga02h9xspcg7npghjfyny20lavc37
    * (Ethereum) 0x1ee2842c194c95bc54473c6b27d602fc0bfc81a9
---
⌨️ con ❤️ por JLG777 😊

_Copyright (c) [2025] [jlg777]_
