import "./Input.css";

const Input = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  required = false,
  autoComplete = "",
  options = [],
  rows = 5,
  labelKey = "name",
  valueKey = "id",
}) => {

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(opt => opt[valueKey].toString() === selectedValue);
    onChange(selectedOption || { [valueKey]: "", [labelKey]: "" });
  };

  return (
    <>
      {type === "select" ? (
        <select
          id={id}
          value={value[valueKey] || ""}
          onChange={handleSelectChange}
          maxLength={maxLength}
          className="input"
          required={required}
        >
          <option value="">{placeholder ? placeholder : `selecciona una opción`}</option>
          {options.map((option, index) => (
            <option key={index} value={option[valueKey]}>
              {option[labelKey]}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          maxLength={maxLength}
          className="textarea"
          required={required}
          rows={rows}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          maxLength={maxLength}
          className="input"
          autoComplete={autoComplete}
          required={required}
        />
      )}
      {required && <span className="required-asterisk">*</span>}
    </>
  );
};

export default Input;
