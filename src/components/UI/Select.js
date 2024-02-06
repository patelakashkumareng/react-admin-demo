import React from "react";

const Select = React.forwardRef(
  (
    {
      id,
      label,
      showLabel = false,
      divStyle = "",
      labelStyle = "",
      options,
      ...props
    },
    ref
  ) => {
    return (
      <div className={divStyle}>
        {showLabel === true && (
          
          <label htmlFor={id} className={labelStyle}>
            {label}
          </label>
        )}

        <select id={id} {...props} ref={ref}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

      </div>
    );
  }
);

export default Select;
