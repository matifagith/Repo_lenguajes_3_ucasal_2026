# Trabajo Práctico N° 6: Manipulación del DOM con jQuery

**Universidad Católica de Salta** **Facultad de Ingeniería - Ingeniería Informática** **Cátedra de Lenguajes III - Año 2026**

---

## Resultados de Aprendizaje
* Aplicar el uso de jQuery para la manipulación del DOM.
* Capturar y procesar datos de formularios utilizando `.val()`.
* Implementar eventos con jQuery.
* Incorporar efectos visuales (UX).
* Integrar **Data Tables** para la gestión de datos.

## Descripción del Proyecto
Desarrollar el "Gestor de Tareas de Proyecto" para practicar manipulación dinámica y eventos. El trabajo es **individual**.

## Consignas

### 1. Estructura de la Interfaz
- **Título principal.**
- **Formulario:**
  - Nombre de la tarea.
  - Prioridad (Alta, Media, Baja).
  - Botón "Agregar".
- **Tabla (ID: `tablaTareas`):**
  - Columnas: Tarea, Prioridad, Acción.

### 2. Funcionalidades (Botón Agregar)
- Capturar datos con `.val()`.
- Validar que el nombre no esté vacío.
- Insertar fila dinámicamente mediante **Data Tables**.
- La nueva fila debe aparecer con un efecto `.fadeIn()`.

### 3. Estilos Dinámicos
- Cambiar el color del título al pasar el mouse (`hover`).

### 4. Eliminación
- Botón "Eliminar" por fila.
- La fila debe desaparecer con `.fadeOut()`.