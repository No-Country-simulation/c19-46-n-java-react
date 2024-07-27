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
  options,
  rows = 5,
}) => {
  return (
    <>
      {type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className="input"
          required={required}
        >
          {options &&
            options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
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
