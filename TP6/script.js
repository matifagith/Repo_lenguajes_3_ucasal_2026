$(document).ready(function() {
    // 1. Inicializar DataTable
    const table = $('#tablaTareas').DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
        }
    });

    // 2. Cambio de estilo dinámico en el título
    $('#main-title').on('mouseenter', function() {
        $(this).css('color', '#0d6efd'); // Azul Bootstrap
    }).on('mouseleave', function() {
        $(this).css('color', 'black');
    });

    // 3. Agregar Tarea
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        // Capturar datos usando .val()
        const nombre = $('#taskName').val().trim();
        const prioridad = $('#priority').val();

        // Validación básica
        if (nombre === "") {
            alert("El campo 'Nombre de tarea' no puede estar vacío.");
            return;
        }

        // Crear el botón de eliminar
        const btnEliminar = '<button class="btn btn-danger btn-sm btn-delete">Eliminar</button>';

        // Agregar a la tabla usando la API de DataTables
        const rowNode = table.row.add([
            nombre,
            prioridad,
            btnEliminar
        ]).draw(false).node();

        // Efecto fadeIn
        $(rowNode).hide().fadeIn(1000);

        // Limpiar formulario
        $('#taskName').val('');
    });

    // 4. Eliminación de tareas
    $('#tablaTareas tbody').on('click', '.btn-delete', function() {
        const fila = $(this).closest('tr');
        fila.fadeOut(600, function() {
            table.row(fila).remove().draw(false);
        });
    });

    // 5. Generar 10 entradas aleatorias
$('#btn-random').on('click', function() {
    const tareasRandom = [
        "Revisar base de datos", "Limpiar código", "Actualizar Bootstrap", 
        "Corregir errores de JS", "Optimizar imágenes", "Subir a producción", 
        "Test de usabilidad", "Reunión de equipo", "Documentar API", 
        "Backup de seguridad", "Configurar router", "Reparar estilos CSS"
    ];
    const prioridades = ["Alta", "Media", "Baja"];

    for (let i = 0; i < 10; i++) {
        // Seleccionar datos al azar
        const nombreAleatorio = tareasRandom[Math.floor(Math.random() * tareasRandom.length)] + " " + (i + 1);
        const prioridadAleatoria = prioridades[Math.floor(Math.random() * prioridades.length)];
        const btnEliminar = '<button class="btn btn-danger btn-sm btn-delete">Eliminar</button>';

        // Agregar a la tabla usando la API de DataTables
        const rowNode = table.row.add([
            nombreAleatorio,
            prioridadAleatoria,
            btnEliminar
        ]).draw(false).node();

        // Efecto visual para que se note la carga
        $(rowNode).hide().fadeIn(500);
    }
});
});