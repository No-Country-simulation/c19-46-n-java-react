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
}) => {

  const optionsTransform = () => {
    if (options && options.length > 0) {
      return options.map((option) => ({
        value: option.id,
        label: option.name,
      }));
    }
  };

  const newOptions = optionsTransform();

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
          {
            newOptions && newOptions.length > 0 ? (
              newOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))
            ) : null
          }
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
