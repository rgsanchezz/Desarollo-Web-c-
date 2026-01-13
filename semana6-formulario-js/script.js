const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

const formulario = document.getElementById("formulario");

function validarNombre() {
    if (nombre.value.length >= 3) {
        setValido(nombre, "errorNombre", "");
        return true;
    } else {
        setInvalido(nombre, "errorNombre", "Debe tener al menos 3 caracteres");
        return false;
    }
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value)) {
        setValido(correo, "errorCorreo", "");
        return true;
    } else {
        setInvalido(correo, "errorCorreo", "Correo no válido");
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (regex.test(password.value)) {
        setValido(password, "errorPassword", "");
        return true;
    } else {
        setInvalido(password, "errorPassword", "Mín. 8 caracteres, un número y un carácter especial");
        return false;
    }
}

function validarConfirmPassword() {
    if (password.value === confirmPassword.value && confirmPassword.value !== "") {
        setValido(confirmPassword, "errorConfirmPassword", "");
        return true;
    } else {
        setInvalido(confirmPassword, "errorConfirmPassword", "Las contraseñas no coinciden");
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        setValido(edad, "errorEdad", "");
        return true;
    } else {
        setInvalido(edad, "errorEdad", "Debes ser mayor de 18 años");
        return false;
    }
}

function setValido(input, errorId, mensaje) {
    input.classList.add("valido");
    input.classList.remove("invalido");
    document.getElementById(errorId).textContent = mensaje;
}

function setInvalido(input, errorId, mensaje) {
    input.classList.add("invalido");
    input.classList.remove("valido");
    document.getElementById(errorId).textContent = mensaje;
}

function validarFormulario() {
    const valido =
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmPassword() &&
        validarEdad();

    btnEnviar.disabled = !valido;
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Formulario enviado correctamente");
    formulario.reset();
    btnEnviar.disabled = true;
});
