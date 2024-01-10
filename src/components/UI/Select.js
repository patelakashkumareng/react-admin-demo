import React from "react";

const Select = ({
  id,
  label,
  divStyle = "",
  labelStyle = "",
  options,
  ...props
}) => {
  // const divStyling = divStyle ? `className=${divStyle}` : ''
  return (
    <div className={divStyle}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <select id={id} {...props}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
