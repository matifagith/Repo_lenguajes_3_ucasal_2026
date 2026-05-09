# Trabajo Práctico N° 7: Consumo de APIs con AJAX y Manipulación del DOM

**Institución:** Universidad Católica de Salta  
**Facultad:** Facultad de Ingeniería - Ingeniería Informática  
**Cátedra:** Lenguajes III - Año 2026  

---

## Resultado(s) de Aprendizaje(s)
* Comprender el concepto de **API REST** y cómo consumirla desde JavaScript.
* Utilizar `fetch()` para realizar peticiones asincrónicas a una API externa.
* Manipular el **DOM** para mostrar dinámicamente los datos obtenidos.
* Aplicar lógica condicional para manejar distintos tipos de búsqueda.
* Construir elementos HTML dinámicamente con `innerHTML`.
* Manejar eventos del usuario con `addEventListener()`.

## Presentación
Se desarrollará una página web interactiva denominada **"Buscador de Personajes"**, que permitirá consultar información de personajes de la serie *Rick and Morty* utilizando su API pública. El objetivo es integrar AJAX con la manipulación del DOM, consumiendo datos reales de una API REST sin recargar la página.

**API Pública:** `https://rickandmortyapi.com/api`  
**Carácter:** Individual.

## Descripción de las Actividades

### 1. Estructura de la Interfaz
Desarrollar una página que permita buscar personajes por **nombre** o por **ID numérico**. Debe incluir:
* Título principal.
* Campo de texto (`input`) para la búsqueda.
* Botón **"Buscar"**.
* Un `div` con **ID `resultado`** donde se mostrará la card del personaje.

### 2. Lógica de Búsqueda
Al presionar "Buscar", el sistema debe:
* **Si es número:** Realizar petición por ID (`/character/{id}`).
* **Si es texto:** Realizar petición por nombre (`/character/?name={nombre}`). Si hay varios resultados, mostrar solo el primero (`data.results[0]`).
* Convertir la respuesta a JSON mediante `.json()`.

### 3. Card del Personaje (innerHTML)
La card generada dentro del div `resultado` debe contener:
* Imagen del personaje.
* Nombre.
* Estado (*Alive* / *Dead* / *unknown*).
* Especie.
* Última ubicación conocida.

### 4. Validación básica
* **Campo vacío:** Mostrar el mensaje "Por favor, ingresá un nombre o un ID" en el div resultado.
* **Sin resultados:** Si la API no encuentra nada, mostrar "Personaje no encontrado".

### 5. Estilo dinámico
El color del borde o del encabezado de la card debe cambiar según el **estado** del personaje:
* **Alive:** Verde.
* **Dead:** Rojo.
* **unknown:** Gris.

## Requisitos Técnicos
* El proyecto debe tener al menos `index.html` y `script.js`.
* Utilizar **Bootstrap** para el diseño visual.
* Se permite el uso de **jQuery** para el manejo del DOM y eventos.
* La petición a la API debe realizarse con `fetch()` o con los métodos AJAX de jQuery.

---
*Referencia de la API: https://rickandmortyapi.com*
**Deploy tp7:** https://leng-3-tp7-dom-api-matifa.vercel.app/*
