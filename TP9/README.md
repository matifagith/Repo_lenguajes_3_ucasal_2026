# Registro para Torneo de Videojuegos 🎮

**Trabajo Práctico N° 9 - Repaso Parcial** **Materia:** Lenguajes III  
**Carrera:** Ingeniería Informática, Universidad Católica de Salta (UCASAL)  

## 📝 Descripción del Proyecto
Este proyecto consiste en una página web interactiva desarrollada para gestionar la inscripción de jugadores a un torneo de videojuegos. La aplicación permite a los usuarios seleccionar el juego en el que desean competir, ingresar sus datos mediante un formulario con validaciones estrictas y, finalmente, completar un cuestionario sobre su estilo de juego.

El desarrollo fue planteado como un repaso integral, enfocado fuertemente en la manipulación del DOM, el manejo de eventos y la validación de datos utilizando Vanilla JavaScript, cumpliendo con todos los requerimientos establecidos en la consigna del trabajo práctico.

## ✨ Funcionalidades Principales

### 1. Selección de Juego (Grilla Interactiva - Ejercicio 2)
- Interfaz basada en una grilla visual con 6 opciones de juegos (Minecraft, Fortnite, Valorant, FIFA 25, Among Us, Rocket League).
- La selección de una tarjeta proporciona *feedback* visual inmediato (cambios en el borde y color de fondo mediante el uso de `classList`), garantizando que solo quede un juego marcado a la vez.
- La elección del usuario se almacena dinámicamente en una variable global para condicionar la habilitación del formulario.

### 2. Formulario de Inscripción y Validaciones (Ejercicio 1)
El sistema implementa validaciones del lado del cliente en el momento en que se presiona el botón de registro. Los mensajes de error se inyectan de forma dinámica en el DOM (evitando el uso de `alert()`):
- **Nickname:** Validado mediante expresiones regulares (`Regex`), requiriendo que contenga únicamente caracteres alfanuméricos y una longitud mínima de 3 caracteres.
- **Edad:** Se verifica que el dato sea numérico (`isNaN`) y que el jugador sea mayor de 16 años.
- **Código de Equipo:** Validación de formato estricto que exige un número de exactamente 4 dígitos.
- **Juego Seleccionado:** Comprueba que la variable global de la grilla contenga una selección válida antes de permitir el registro.

### 3. Cuestionario de Preparación (Ejercicio 3)
- Tras superar con éxito todas las validaciones del formulario, el sistema oculta los campos de entrada y presenta un mensaje de confirmación exitosa.
- Se desbloquea la sección de preparación, donde un botón dispara un cuestionario progresivo a través de cuadros de diálogo `prompt()`.
- Las respuestas recolectadas (horas semanales dedicadas, preferencia de modalidad y rol en el equipo) se capturan, se procesan (asignando un texto por defecto en caso de que el usuario cancele) y se renderizan finalmente en la página mediante `innerHTML`.

## 🛠️ Tecnologías Utilizadas
- **HTML5:** Estructuración semántica dividida en secciones claras (Selección de juegos, Datos del jugador, Preparación).
- **CSS3:** Diseño limpio y responsivo (layout ajustado a 1 columna en móviles y 3 en escritorio). Incorpora variables de diseño modernas, sombras suaves (box-shadow) y transiciones.
- **JavaScript (Vanilla):** Lógica central de la aplicación, control del flujo de información, validación de formularios y manipulación en tiempo real del Document Object Model (DOM).

## 📂 Estructura de Archivos
- `index.html`: Maquetado y estructura base del proyecto.
- `styles.css`: Reglas de presentación y estilos visuales responsivos.
- `script.js`: Controladores de eventos, validaciones lógicas e interacción con el usuario.