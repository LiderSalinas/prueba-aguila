Prueba Técnica JR Frontend
Este proyecto es una aplicación web simple construida con React que incluye un formulario de contacto, una lista de tareas y una lista de usuarios obtenida de una API. La aplicación está diseñada para demostrar habilidades básicas en React y el uso de Bootstrap para el diseño.

Contenidos
ContactForm: Un formulario de contacto que permite a los usuarios enviar un mensaje.
TaskList: Una lista de tareas con opciones para agregar, completar y eliminar tareas.
UserList: Una lista de usuarios obtenida desde la API jsonplaceholder.typicode.com.
Tecnologías
React: Biblioteca de JavaScript para construir interfaces de usuario.
Bootstrap: Framework CSS para diseñar aplicaciones web responsivas y estilizadas.
jsonplaceholder.typicode.com: API falsa para obtener datos de usuarios.

Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

Clona el repositorio:

bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
Navega a la carpeta del proyecto:

bash
Copiar código
cd <CARPETA_DEL_PROYECTO>
Instala las dependencias:

bash
Copiar código
npm install
Ejecuta la aplicación:

bash
Copiar código
npm start
Esto iniciará el servidor de desarrollo y podrás ver la aplicación en http://localhost:3000.

Estructura del Proyecto
src/components/: Carpeta que contiene los componentes de React.

ContactForm.js: Componente para el formulario de contacto.
Task.js: Componente para cada tarea individual.
TaskInput.js: Componente para ingresar nuevas tareas.
TaskList.js: Componente para la lista de tareas.
UserList.js: Componente para la lista de usuarios.
src/App.js: Componente principal que renderiza los componentes de la aplicación.

src/App.css: Archivo de estilos CSS para la aplicación.

public/index.html: Archivo HTML principal.

Uso
Formulario de Contacto
El formulario de contacto permite enviar un mensaje. Una vez enviado, se muestra un mensaje de agradecimiento y el formulario se reinicia.

Lista de Tareas
La lista de tareas permite agregar nuevas tareas, marcar tareas como completadas y eliminar tareas.

Lista de Usuarios
La lista de usuarios muestra los nombres de los usuarios obtenidos de la API jsonplaceholder.typicode.com.