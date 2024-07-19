import React from 'react';
import './Input.css';

const Input = ({ id, type = "text", placeholder, value, onChange, maxLength, required=false }) => {
  return (
    <div className="input-container">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="input"
        required={required}
      />
      {required && <span className="required-asterisk">*</span>}
    </div>
  );
};

export default Input;