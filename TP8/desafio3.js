// logica_desafio2.js
function clasificarYTabla(num) {
    // 1. Clasificación
    var html = "";
    if (num > 0) html += "<p><strong>Signo:</strong> Es Positivo</p>";
    else if (num < 0) html += "<p><strong>Signo:</strong> Es Negativo</p>";
    else html += "<p><strong>Signo:</strong> Es Cero</p>";

    html += "<p><strong>Día Equivalente:</strong> ";
    switch (num) {
        case 1: html += "Lunes"; break;
        case 2: html += "Martes"; break;
        case 3: html += "Miércoles"; break;
        case 4: html += "Jueves"; break;
        case 5: html += "Viernes"; break;
        case 6: html += "Sábado"; break;
        case 7: html += "Domingo"; break;
        default: html += "No es un día válido"; break;
    }
    document.getElementById("divAnalisis").innerHTML = html;

    // 2. Tabla (For)
    var tabla = "<ul class='list-group list-group-flush'>";
    for (var i = 1; i <= 10; i++) {
        tabla += "<li class='list-group-item'>" + num + " x " + i + " = <strong>" + (num * i) + "</strong></li>";
    }
    document.getElementById("tabla").innerHTML = tabla + "</ul>";
}

var numeros = []; // Array global recuperado

function calcularEstadisticas(num) {
    numeros.push(num);
    
    var i = 0, sumaTotal = 0, cantPares = 0;
    var elMayor = numeros[0], elMenor = numeros[0];

    while (i < numeros.length) {
        var actual = numeros[i];
        sumaTotal += actual;
        if (actual % 2 === 0) cantPares++;
        if (actual > elMayor) elMayor = actual;
        if (actual < elMenor) elMenor = actual;
        i++;
    }

    document.getElementById("divResumen").innerHTML = 
        "<p><strong>Historial:</strong> [" + numeros.join(", ") + "]</p>" +
        "<p><strong>Suma:</strong> " + sumaTotal + "</p>" +
        "<p><strong>Pares:</strong> " + cantPares + "</p>" +
        "<p class='text-success fw-bold'>Mayor: " + elMayor + "</p>" +
        "<p class='text-danger fw-bold'>Menor: " + elMenor + "</p>";
}

function reiniciar() {
    numeros = [];
    var vacio = "<span class='text-muted fst-italic'>Esperando datos...</span>";
    document.getElementById("divAnalisis").innerHTML = vacio;
    document.getElementById("tabla").innerHTML = vacio;
    document.getElementById("divResumen").innerHTML = vacio;
    document.getElementById("errorNumero").innerHTML = "";
}