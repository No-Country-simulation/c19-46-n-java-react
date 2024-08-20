/**
 * Valida los valores del formulario de registro.
 */
export const validarRegisterForm = (valores) => {
    let errores = {};

    // Valida el nombre de usuario
    if (!valores.username) {
        errores.username = "El nombre de usuario es requerido.";
    }

    // Valida el email
    if (!valores.email) {
        errores.email = "El email es requerido.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = "El email no es válido.";
    }

    // Valida la contraseña
    if (!valores.password) {
        errores.password = "La contraseña es requerida.";
    } else if (valores.password.length < 6) {
        errores.password = "La contraseña debe tener al menos 6 caracteres.";
    } else if (valores.password.length > 8) {
        errores.password = "La contraseña debe tener un maximo de 8 caracteres.";
    }

    // Valida la confirmación de la contraseña
    if (!valores.confirmarPassword) {
        errores.confirmarPassword = "Confirme la contraseña.";
    } else if (valores.confirmarPassword !== valores.password) {
        errores.confirmarPassword = "Las contraseñas no coinciden.";
    }

    return errores;
}

/**
 * Valida los valores del formulario de perfil.
 */
export const validarPerfilForm = (valores) => {
    let errores = {};

    // Valida el nombre
    if (!valores.nombre) {
        errores.nombre = "El nombre es requerido.";
    } else if (valores.nombre.length < 3) {
        errores.nombre = "El nombre debe tener al menos 3 caracteres.";
    }

    // Valida el tel válido
    const regexTelefono = /^[0-9\b]+$/;
    if (!valores.telefono) {
        errores.telefono = "El teléfono es requerido.";
    } else if (!regexTelefono.test(valores.telefono)) {
        errores.telefono = "El teléfono solo debe contener números.";
    }
    return errores;
}

/**
 * Valida los valores del formulario de mascota.
 */
export const validarMascotaForm = (valores) => {
    let errores = {};

    // Valida el nombre
    if (!valores.nombre) {
        errores.nombre = "El nombre es requerido.";
    }

    // Valida la edad
    const regexEdad = /^[0-9\b]+$/;
    if (!valores.edad) {
        errores.edad = "La edad es requerida.";
    } else if (!regexEdad.test(valores.edad)) {
        errores.edad = "La edad solo debe contener números.";
    }

    return errores;
}