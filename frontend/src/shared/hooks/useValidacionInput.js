import { useState } from 'react';

const useValidacionInput = (initialValues, validarForm) => {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const touchedRegisterForm = {
        username: true,
        email: true,
        password: true,
        confirmarPassword: true,
    };

    const touchedPerfilForm = {
        nombre: true,
        telefono: true,
    };

    const touchedMascotaForm = {
        nombre: true,
        edad: true,
        descripcion: true,
        fotos: true,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
        const validationErrors = validarForm(values);
        setErrors(validationErrors);
    };

    const handleValidateRegisterForm = (e, callback) => {
        e.preventDefault();
        const validationErrors = validarForm(values);
        setErrors(validationErrors);
        setTouched(touchedRegisterForm);
        if (Object.keys(validationErrors).length === 0) {
            callback();
        }
    };

    const handleValidatePerfilForm = (e, callback) => {
        e.preventDefault();
        const validationErrors = validarForm(values);
        setErrors(validationErrors);
        setTouched(touchedPerfilForm);
        if (Object.keys(validationErrors).length === 0) {
            callback();
        }
    };

    const handleValidateMascotaForm = (e, callback) => {
        e.preventDefault();
        const validationErrors = validarForm(values);
        setErrors(validationErrors);
        setTouched(touchedMascotaForm);
        if (Object.keys(validationErrors).length === 0) {
            callback();
        }
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleValidateRegisterForm,
        handleValidatePerfilForm,
        handleValidateMascotaForm,
    };
};

export default useValidacionInput;
