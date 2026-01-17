const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");
const errorEdad = document.getElementById("errorEdad");

function validarNombre() {
    if (nombre.value.length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        nombre.classList.add("invalido");
        nombre.classList.remove("valido");
        return false;
    }
    errorNombre.textContent = "";
    nombre.classList.add("valido");
    nombre.classList.remove("invalido");
    return true;
}

function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
        errorEmail.textContent = "Correo electrónico no válido";
        email.classList.add("invalido");
        email.classList.remove("valido");
        return false;
    }
    errorEmail.textContent = "";
    email.classList.add("valido");
    email.classList.remove("invalido");
    return true;
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(password.value)) {
        errorPassword.textContent =
            "Debe tener al menos 8 caracteres, un número y un carácter especial";
        password.classList.add("invalido");
        password.classList.remove("valido");
        return false;
    }
    errorPassword.textContent = "";
    password.classList.add("valido");
    password.classList.remove("invalido");
    return true;
}

function validarConfirmPassword() {
    if (password.value !== confirmPassword.value || confirmPassword.value === "") {
        errorConfirmPassword.textContent = "Las contraseñas no coinciden";
        confirmPassword.classList.add("invalido");
        confirmPassword.classList.remove("valido");
        return false;
    }
    errorConfirmPassword.textContent = "";
    confirmPassword.classList.add("valido");
    confirmPassword.classList.remove("invalido");
    return true;
}

function validarEdad() {
    if (edad.value < 18) {
        errorEdad.textContent = "Debe ser mayor o igual a 18 años";
        edad.classList.add("invalido");
        edad.classList.remove("valido");
        return false;
    }
    errorEdad.textContent = "";
    edad.classList.add("valido");
    edad.classList.remove("invalido");
    return true;
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarEmail() &&
        validarPassword() &&
        validarConfirmPassword() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

// Eventos en tiempo real
nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario validado correctamente ✅");
});
