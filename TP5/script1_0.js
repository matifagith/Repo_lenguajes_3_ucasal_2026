const form = document.getElementById('formulario');
const formResult = document.getElementById('formResult');

const fields = [
    { id: 'nombre', label: 'Nombre' },
    { id: 'apellido', label: 'Apellido' },
    { id: 'email', label: 'Email' },
    { id: 'fechaNacimiento', label: 'Fecha de Nacimiento' },
    { id: 'password', label: 'Contraseña' },
    { id: 'confirmPassword', label: 'Confirmar Contraseña' }
];

// Regex corregidas (sin el escape de la cifra de dólar)
const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const regexEmail = /^[^\s@]+@ucasal\.(edu\.)?ar$/;

function setError(input, message) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}

function clearError(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = '';
    }
}

function validateField(id) {
    const input = document.getElementById(id);
    const value = input.value.trim();
    let valid = true;
    let message = '';

    if (value === '') {
        valid = false;
        message = 'Este campo es obligatorio.';
    } else {
        switch (id) {
            case 'nombre':
            case 'apellido':
                if (value.length <= 3) { // Corregido: "más de 3" significa 4 o más [cite: 559]
                    valid = false;
                    message = 'Debe tener más de 3 caracteres.';
                } else if (!regexTexto.test(value)) {
                    valid = false;
                    message = 'Solo se permiten letras.';
                }
                break;
            case 'email':
                if (!regexEmail.test(value)) {
                    valid = false;
                    message = 'Use un correo institucional (@ucasal.edu.ar).';
                }
                break;
            case 'fechaNacimiento':
                const fechaNac = new Date(value);
                const hoy = new Date();
                let edad = hoy.getFullYear() - fechaNac.getFullYear();
                const m = hoy.getMonth() - fechaNac.getMonth();
                if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
                    edad--;
                }
                if (edad < 18 || edad > 40) {
                    valid = false;
                    message = 'Debe tener entre 18 y 40 años.';
                }
                break;
            case 'password':
                if (value.length < 1) {
                    valid = false;
                    message = 'La contraseña es obligatoria.';
                }
                break;
            case 'confirmPassword':
                const password = document.getElementById('password').value;
                if (value !== password) {
                    valid = false;
                    message = 'Las contraseñas no coinciden.';
                }
                break;
        }
    }

    if (!valid) setError(input, message);
    else clearError(input);
    
    return valid;
}

function encryptPassword(password) {
    return '*'.repeat(password.length);
}

function validateForm() {
    let allValid = true;
    fields.forEach(field => {
        if (!validateField(field.id)) allValid = false;
    });
    return allValid;
}

// Eventos para visualización cifrada (ambos campos) [cite: 564]
['password', 'confirmPassword'].forEach(id => {
    const input = document.getElementById(id);
    const display = document.getElementById(id + 'Display');
    const container = document.getElementById('container-' + (id === 'password' ? 'pass' : 'confirm'));

    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            display.textContent = encryptPassword(this.value);
            container.classList.remove('d-none');
        } else {
            container.classList.add('d-none');
        }
        if (id === 'confirmPassword' || id === 'password') {
            validateField('confirmPassword');
        }
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        formResult.classList.remove('d-none', 'alert-danger');
        formResult.classList.add('alert-success');
        formResult.textContent = '¡Formulario enviado con éxito!';
        console.log('Datos procesados correctamente');
        setTimeout(() => form.reset(), 2000);
    } else {
        formResult.classList.remove('d-none', 'alert-success');
        formResult.classList.add('alert-danger');
        formResult.textContent = 'Por favor, corrija los errores.';
    }
});

// Validación al perder el foco
fields.forEach(field => {
    document.getElementById(field.id).addEventListener('blur', () => validateField(field.id));
});