var nombre_mostrar = "";
var dni_mostrar = "";
var fecha_mostrar = "";

function enviarFormulario() {
    var nombre = validarNombre();
    var dni = validarDni();
    var fecha = validarFecha();

    var mensajeExito = document.getElementById("mensaje-exito");

    if (nombre == true && dni == true && fecha == true) {        
        mensajeExito.innerHTML = "<div><p>Formulario enviado correctamente!</p> <p>" + nombre_mostrar + " - " + dni_mostrar + " - " + fecha_mostrar + "</p></div>";
    } else {
        mensajeExito.innerHTML = ""; 
    }
}

function validarNombre() {
    var nom = document.getElementById("nombre").value;
    var err = document.getElementById("error-nombre");

    console.log("Nombre: " + nom);
    if (nom.length < 3) {
        err.innerHTML = "Error: minimo 3 caracteres";
        return false;
    }

    var letras = /^[a-zA-Z\s]+$/;
    
    if (letras.test(nom) == false) {
        err.innerHTML = "Error: solo se permiten letras";
        return false;
    }

    err.innerHTML = "";

    nombre_mostrar = nom;
    return true;
}

function validarDni() {
    var dni = document.getElementById("dni").value;
    var err = document.getElementById("error-dni");
    console.log("DNI: " + dni);

    if (dni.length != 8) {
        err.innerHTML = "Error: el dni debe tener 8 digitos";
        return false;
    }

    if (isNaN(dni) == true) {
        err.innerHTML = "Error: el dni debe ser solo numeros";
        return false;
    }

    err.innerHTML = "";
    dni_mostrar = dni;
    return true;
}

function validarFecha() {
    var fecha = document.getElementById("fecha").value;
    var err = document.getElementById("error-fecha");

    console.log("Fecha: " + fecha);

    if (fecha == "") {
        err.innerHTML = "Error: ingresa tu fecha de nacimiento";
        return false;
    }

    var añoActual = new Date().getFullYear();
    console.log("Año actual: " + añoActual);
    var fechaPartes = fecha.split("-");
    console.log("fechaPartes: " + fechaPartes);
    var añoNacimiento = fechaPartes[0];
    
    var edad = añoActual - parseInt(añoNacimiento);

    if (edad <= 18) {
        err.innerHTML = "Error: debe ser mayor de 18 años";
        return false;
    }

    err.innerHTML = "";
    fecha_mostrar = fechaPartes[2]+"/"+fechaPartes[1]+"/"+fechaPartes[0];
    return true;
}

function hacerPreguntas() {
    var p1 = prompt("¿Cuál es tu nacionalidad?");
    var p2 = prompt("¿Cuál es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)");
    var p3 = prompt("¿Por qué elegiste esta carrera?");

    if (p1 == null || p1 == "") {
        p1 = "No respondió";
    }
    if (p2 == null || p2 == "") {
        p2 = "No respondió";
    }
    if (p3 == null || p3 == "") {
        p3 = "No respondió";
    }

    var divRespuestas = document.getElementById("respuestas");
    
    divRespuestas.innerHTML = 
        "Pregunta 1: " + p1 + "<br><br>" +
        "Pregunta 2: " + p2 + "<br><br>" +
        "Pregunta 3: " + p3;
}