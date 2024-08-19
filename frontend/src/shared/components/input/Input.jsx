import './Input.css';

/**
 * Componente de entrada de formulario
 * 
 * @param {Object} props
 * @prop {string} id - Identificador del input
 * @prop {string} [type=text] - Tipo de input (text, password, email, etc.)
 * @prop {string} placeholder - Texto de placeholder
 * @prop {any} value - Valor del input
 * @prop {function} onChange - Función a ejecutar cuando cambia el valor del input
 * @prop {number} maxLength - Número máximo de caracteres permitidos
 * @prop {boolean} [required=false] - Indica si el input es requerido
 * @prop {string} [autoComplete] - Valor para el atributo autocomplete
 * @prop {Object[]} [options] - Opciones para un select
 * @prop {number} [rows=5] - Número de filas para un textarea
 * @prop {string} [labelKey=name] - Clave para obtener el nombre de las opciones
 * @prop {string} [valueKey=id] - Clave para obtener el valor de las opciones
 * @prop {boolean} [isValid=true] - Indica si el input es válido
 * @prop {string} [errorMessage=''] - Mensaje de error
 * @prop {boolean} [touched=false] - Indica si el input ha sido tocado
 */
const Input = ({
  id,
  name = "",
  type = 'text',
  placeholder,
  value,
  onChange,
  minLength = 1,
  maxLength,
  required = false,
  options = [],
  rows = 5,
  labelKey = 'name',
  valueKey = 'id',
  isValid = true,
  errorMessage = '',
  touched = false,
}) => {

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(opt => opt[valueKey].toString() === selectedValue);
    onChange(selectedOption || { [valueKey]: '', [labelKey]: '' });
  };

  return (
    <>
      {type === 'select' ? (
        <select
          id={id}
          name={name}
          className='input'
          value={value[valueKey] || ''}
          onChange={handleSelectChange}
          maxLength={maxLength}
          required={required}
        >
          <option value="">{placeholder || 'Selecciona una opción'}</option>
          {options.map((option, index) => (
            <option key={index} value={option[valueKey]}>
              {option[labelKey]}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          className='textarea'
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          maxLength={maxLength}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          className='input'
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
        />
      )}
      {required && <span className="required-asterisk">*</span>}
      <div>
        {!isValid && touched && (
          <span style={{ color: 'red', fontSize: '0.8rem' }}>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default Input;