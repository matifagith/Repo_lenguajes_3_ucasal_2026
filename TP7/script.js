/**
 * ============================================================
 * script.js — Lógica del Buscador de Personajes
 * Cátedra: Lenguajes III - Año 2026
 * ============================================================
 * * Este script se encarga de:
 * 1. Escuchar el evento de click en el botón de búsqueda.
 * 2. Validar que el usuario haya ingresado un dato.
 * 3. Determinar si la búsqueda es por ID (número) o por Nombre (texto).
 * 4. Realizar la petición asincrónica (AJAX) a la API de Rick and Morty.
 * 5. Procesar la respuesta JSON y renderizar una Card de Bootstrap.
 * 6. Aplicar estilos dinámicos según el estado del personaje.
 */

// $(document).ready: asegura que el código se ejecute solo cuando el HTML esté cargado.
$(document).ready(function() {

    // Seleccionamos el botón por su ID y escuchamos el evento 'click'
    $('#btnBuscar').on('click', function() {
        
        // .val() obtiene el valor del input; .trim() quita espacios vacíos al inicio/final.
        const input = $('#busqueda').val().trim();
        const resultadoDiv = $('#resultado');

        // 1. VALIDACIÓN: Si el campo está vacío, mostramos un mensaje y cortamos la ejecución.
        if (input === "") {
            resultadoDiv.html('<div class="alert alert-warning text-center">Por favor, ingresá un nombre o un ID</div>');
            return;
        }

        // Limpiamos el contenedor y mostramos un Spinner de Bootstrap mientras esperamos la API.
        resultadoDiv.html(`
            <div class="d-flex justify-content-center py-5">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
            </div>
        `);

        let url;
        let esBusquedaPorNombre = false;

        /**
         * 2. LÓGICA DE URL: 
         * isNaN (is Not a Number) devuelve true si NO es un número.
         * Si es un número (!isNaN), usamos el endpoint de ID.
         * Si es texto, usamos el filtro por nombre.
         */
        if (!isNaN(input)) {
            // Ejemplo: https://rickandmortyapi.com/api/character/1
            url = `https://rickandmortyapi.com/api/character/${input}`;
        } else {
            // Ejemplo: https://rickandmortyapi.com/api/character/?name=rick
            url = `https://rickandmortyapi.com/api/character/?name=${input}`;
            esBusquedaPorNombre = true;
        }

        /**
         * 3. PETICIÓN AJAX (fetch):
         * fetch() devuelve una "Promesa". 
         * .then() captura la respuesta cuando llega.
         */
        fetch(url)
            .then(response => {
                // Si la respuesta no es 200 (OK), lanzamos un error para el .catch()
                if (!response.ok) {
                    throw new Error('Personaje no encontrado');
                }
                return response.json(); // Convertimos la respuesta cruda a objeto JSON.
            })
            .then(data => {
                /**
                 * 4. PROCESAMIENTO DE DATOS:
                 * Si buscamos por nombre, la API devuelve un objeto con un array "results".
                 * Según la consigna, debemos tomar solo el primer personaje encontrado.
                 */
                const personaje = esBusquedaPorNombre ? data.results[0] : data;
                
                // Llamamos a la función encargada de dibujar el HTML.
                renderizarCard(personaje);
            })
            .catch(error => {
                // El .catch() captura errores de red o el error lanzado arriba.
                resultadoDiv.html(`<div class="alert alert-danger text-center">${error.message}</div>`);
            });
    });

    /**
     * 5. FUNCIÓN RENDERIZAR:
     * Recibe el objeto del personaje y construye el HTML usando Template Literals (``).
     */
    function renderizarCard(p) {
        
        // ESTILO DINÁMICO: Definimos la clase de color según el status.
        let borderClass;
        const status = p.status.toLowerCase();

        if (status === 'alive') {
            borderClass = 'border-success'; // Verde
        } else if (status === 'dead') {
            borderClass = 'border-danger';  // Rojo
        } else {
            borderClass = 'border-secondary'; // Gris (unknown)
        }

        // Construcción de la Card de Bootstrap mediante innerHTML.
        const cardHtml = `
            <div class="col-12 col-sm-8 col-md-6 col-lg-4 animate__animated animate__fadeIn">
                <div class="card shadow-lg ${borderClass}" style="border-width: 4px;">
                    <img src="${p.image}" class="card-img-top" alt="${p.name}">
                    <div class="card-body bg-dark text-white">
                        <h2 class="card-title h4 text-info">${p.name}</h2>
                        <hr class="border-light">
                        <p class="card-text"><strong>Estado:</strong> ${p.status}</p>
                        <p class="card-text"><strong>Especie:</strong> ${p.species}</p>
                        <p class="card-text"><strong>Ubicación:</strong> ${p.location.name}</p>
                    </div>
                </div>
            </div>
        `;

        // Inyectamos el string HTML dentro del div con ID resultado.
        $('#resultado').html(cardHtml);
    }
});