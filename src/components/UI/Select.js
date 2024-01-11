import React from "react";

const Select = React.forwardRef(({
  id,
  label,
  hidelabel = false,
  divStyle = "",
  labelStyle = "",
  options,
  ...props
}, ref) => {
  return (
    <div className={divStyle}>
      {hidelabel === true && (
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
      )}

      <select id={id} {...props} ref={ref}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
