// logica_desafio2.js

// Array global para el punto extra del historial
var historial = [];

// 1. obtenerNumero() — Patrón del coloquio
function obtenerNumero() {
    var val = document.getElementById("valor").value;
    // Validamos que no esté vacío y que sea un número (NaN = Not a Number)
    if (val === "" || isNaN(val)) {
        alert("Por favor, ingresá un número válido.");
        return null;
    }
    return parseFloat(val);
}

// 2. convertir() — Función principal
function convertir() {
    var numero = obtenerNumero();
    if (numero === null) return; // Si hay error, detenemos la ejecución

    var tipo = document.getElementById("tipoConversion").value;
    var resultado = 0;
    var textoUnidadesInicio = "";
    var textoUnidadesFin = "";

    // Switch con los 7 casos según la consigna
    switch (tipo) {
        case "1": 
            resultado = numero * 0.621371; 
            textoUnidadesInicio = "km";
            textoUnidadesFin = "millas"; 
            break;
        case "2": 
            resultado = numero * 1.60934; 
            textoUnidadesInicio = "millas";
            textoUnidadesFin = "km"; 
            break;
        case "3": 
            resultado = numero * 2.20462;             
            textoUnidadesInicio = "kg";
            textoUnidadesFin = "lb"; 
            break;
        case "4": 
            resultado = numero * 0.453592;             
            textoUnidadesInicio = "lb";
            textoUnidadesFin = "kg";  
            break;
        case "5": 
            resultado = (numero * 9/5) + 32; 
            textoUnidadesInicio = "°C";
            textoUnidadesFin = "°F"; 
            break;
        case "6": 
            resultado = (numero - 32) * 5/9;             
            textoUnidadesInicio = "°F";
            textoUnidadesFin = "°C"; 
            break;
        case "7": 
            resultado = numero * 3.28084; 
            textoUnidadesInicio = "m";
            textoUnidadesFin = "ft"; 
            break;
        default: return;
    }

    // Mostramos el resultado con 2 decimales
    var mensaje = numero + " " + textoUnidadesInicio + "  --->  " + resultado.toFixed(2) + " " + textoUnidadesFin;
    document.getElementById("resultado").innerHTML = mensaje;

    // Punto Extra: Agregar al historial
    historial.push(mensaje);
    mostrarHistorial();
}

// Función para mostrar el historial usando un bucle for
function mostrarHistorial() {
    var listaHTML = "";
    for (var i = 0; i < historial.length; i++) {
        listaHTML += "<li class='list-group-item'>" + historial[i] + "</li>";
    }
    document.getElementById("historial").innerHTML = listaHTML;
}