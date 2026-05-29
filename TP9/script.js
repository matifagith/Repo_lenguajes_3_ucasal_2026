// Variable global que guarda el juego elegido por el jugador
// Al ser global, cualquier funcion del archivo puede leerla
var juegoSeleccionado = "";
// EJERCICIO 2 - Seleccion de juego en la grilla

// Esta funcion se ejecuta cuando el jugador hace clic en una tarjeta.
// Recibe el elemento clickeado (tarjeta) y el nombre del juego.
function seleccionarJuego(tarjeta, nombreJuego) {
    // Obtenemos todas las tarjetas de la grilla
    var todasLasTarjetas = document.getElementsByClassName("tarjeta");
    // Recorremos todas y les quitamos la clase "seleccionado"
    // Asi nos aseguramos de que solo una quede marcada a la vez
    var nombres_juego = []
    for (var i = 0; i < todasLasTarjetas.length; i++) {
        todasLasTarjetas[i].classList.remove("seleccionado");
        nombres_juego.push(todasLasTarjetas[i].innerText)
    }
    // Marcamos la tarjeta clickeada agregandole la clase "seleccionado"
    tarjeta.classList.add("seleccionado");
    // Guardamos el nombre en la variable global para usarlo despues en la validaci
    juegoSeleccionado = nombreJuego;
    //console.log("nombres_juego: " + nombres_juego);
}

// =========================================================================
// EJERCICIO 1 - Validaciones del formulario
// =========================================================================

// Funcion principal que se llama al presionar el boton "Registrar"
function registrar() {
    console.log("------ Registro en proceso ------ ");
    // Ejecutamos cada validacion y guardamos si paso o no
    var nickOk   = validarNickname();
    var edadOk   = validarEdad();
    var codigoOk = validarCodigo();
    var juegoOk  = validarJuego();

    // Solo si las 4 validaciones son true el registro es exitoso
    if (nickOk && edadOk && codigoOk && juegoOk) {
        // Ocultamos el formulario y mostramos un mensaje de exito en su lugar
        var seccion = document.getElementById("seccion-formulario");
        seccion.innerHTML = "<div class='mensaje-exito'>" +
            "<p class='exito-icono'>✅</p>" +
            "<h3>¡Registro exitoso!</h3>" +
            "<p>Jugador registrado para el torneo de <strong>" + juegoSeleccionado + "</strong></p>" +
            "</div>";

        // Mostramos la seccion de preguntas de preparacion
        document.getElementById("seccion-preparacion").style.display = "block";

        // Scrolleamos hacia el paso 3 para que el jugador lo vea
        document.getElementById("seccion-preparacion").scrollIntoView({ behavior: "smooth" });
    }
}

function validarNickname() {
    var valor = document.getElementById("nickname").value;
    var spanError = document.getElementById("error-nickname");
    console.log("Nickname_valor: " + valor);
    // La expresion regular ^[a-zA-Z0-9]+$ acepta solo letras y numeros, sin espacios
    var soloLetrasYNumeros = /^[a-zA-Z0-9]+$/;

    if (valor.length < 3) {
        spanError.innerHTML = "El nickname debe tener al menos 3 caracteres.";
        return false;
    }

    if (!soloLetrasYNumeros.test(valor)) {
        spanError.innerHTML = "Solo se permiten letras y números, sin espacios.";
        return false;
    }

    // Si llega hasta aca, el nickname es valido
    spanError.innerHTML = "";
    return true;
}

// --- Validacion de la Edad ---
function validarEdad() {
    var valor = document.getElementById("edad").value;
    var spanError = document.getElementById("error-edad");
    console.log("Edad_valor: " + valor);
    // isNaN devuelve true si el valor NO es un numero
    if (valor === "" || isNaN(valor)) {
        spanError.innerHTML = "La edad debe ser un número.";
        return false;
    }

    // Convertimos a numero entero para comparar
    var edad = parseInt(valor);

    if (edad <= 16) {
        spanError.innerHTML = "Debés ser mayor de 16 años para participar.";
        return false;
    }

    spanError.innerHTML = "";
    return true;
}

// --- Validacion del Codigo de equipo ---
function validarCodigo() {
    var valor = document.getElementById("codigo").value;
    var spanError = document.getElementById("error-codigo");
    console.log("Codigo_valor: " + valor);

    // Verificamos que sea un numero y que tenga exactamente 4 digitos
    if (isNaN(valor) || valor === "") {
        spanError.innerHTML = "El código debe ser numérico.";
        return false;
    }

    if (valor.length !== 4) {
        spanError.innerHTML = "El código debe tener exactamente 4 dígitos.";
        return false;
    }

    spanError.innerHTML = "";
    return true;
}

// --- Validacion del Juego seleccionado ---
function validarJuego() {
    var spanError = document.getElementById("error-juego");
    console.log("Juego_seleccionado: " + juegoSeleccionado);

    // Si la variable global esta vacia, no se eligio ningun juego
    if (juegoSeleccionado === "") {
        spanError.innerHTML = "Debes seleccionar un juego de la grilla.";
        return false;
    }
    spanError.innerHTML = "";
    return true;
}

// Se ejecuta al hacer clic en el boton "Preparacion"
function hacerPreguntas() {

    // Lanzamos las 3 preguntas con prompt(), una despues de la otra
    // prompt() devuelve null si el usuario presiona Cancelar
    var horas     = prompt("¿Cuántas horas por semana dedicás a jugar?");
    var modalidad = prompt("¿Preferís jugar solo o en equipo?");
    var rol       = prompt("¿Qué rol ocupás en tu equipo? (Atacante, Defensa, Soporte, etc.)");

    // Si el usuario cancelo, reemplazamos null por un texto indicativo
    if (horas === "")       horas     = "No respondió esta pregunta";
    if (modalidad === "")   modalidad = "No respondió esta pregunta";
    if (rol === "")         rol       = "No respondió esta pregunta";

    // Armamos el HTML con las respuestas y lo insertamos en el div "respuestas"
    var divRespuestas = document.getElementById("respuestas");

    divRespuestas.innerHTML =
        "<p><strong>Horas de juego por semana:</strong> " + horas + "</p>" +
        "<p><strong>Modalidad preferida:</strong> " + modalidad + "</p>" +
        "<p><strong>Rol en el equipo:</strong> " + rol + "</p>";
}