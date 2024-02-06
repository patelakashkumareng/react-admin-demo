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
    console.log('props error:: ', props.error);
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

        {props.error && (
          <label className="error jquery-validation-error small form-text invalid-feedback">
            {props.error}
          </label>
        )}
      </div>
    );
  }
);

export default Select;
