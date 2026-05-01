# Trabajo Práctico N° 5: Formularios con JavaScript

**Institución:** Universidad Católica de Salta  
**Facultad:** Facultad de Ingeniería - Ingeniería Informática  
**Cátedra:** Lenguajes III - Año 2026  

---

## Resultado(s) de Aprendizaje(s)
El resultado de aprendizaje que se pretende lograr con este práctico es:
* Aplicar validaciones de datos utilizando JavaScript.
* Manipular el DOM para obtener y procesar información de formularios.
* Implementar lógica de control en el cliente.
* Comprender el uso de eventos en formularios web.

## Presentación
En este trabajo práctico se desarrollará un formulario web con validaciones específicas utilizando JavaScript.

**El trabajo es Individual.**

## Descripción de las actividades o consignas de trabajo
Se deberá desarrollar una página web que contenga un formulario de registro de usuario, el cual deberá incluir los siguientes campos:
* Nombre
* Apellido
* Email
* Fecha de nacimiento
* Contraseña

### Validaciones (al presionar el botón "Enviar")
Al presionar el botón "Enviar", se deberán realizar las siguientes validaciones y el sistema debe informar los errores al usuario:

1. **Campos obligatorios:** Todos los campos deben estar completos.
2. **Nombre y Apellido:** Deben contener solo letras y tener más de 3 caracteres.
3. **Email:** Debe tener formato de email válido y solo se deben aceptar correos institucionales de UCASAL (`@ucasal`). Por ejemplo: `usuario@ucasal.edu.ar`.
4. **Fecha de Nacimiento:** Se debe utilizar un input de tipo `date`. El usuario debe tener más de 18 años y menos de 40 años.
5. **Contraseña:** Debe existir dos inputs de contraseña (la segunda para validar) y ambas deben ser iguales y mostrar las contraseñas cifradas (como `*****`).