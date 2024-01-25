import React from "react";

const Input = React.forwardRef(
  (
    {
      id,
      showLabel = false,
      hideDiv = false,
      label,
      divStyle = "",
      labelStyle = "",
      ...props
    },
    ref
  ) => {
    return (
      <>
        {hideDiv === false && (
          <div className={divStyle}>
            {showLabel === true && (
              <label htmlFor={id} className={labelStyle}>
                {label}
              </label>
            )}
            <input ref={ref} id={id} {...props} />
            {props.error && (
              <label className="error jquery-validation-error small form-text invalid-feedback">
                {props.error}
              </label>
            )}
          </div>
        )}
        {hideDiv === true && (
          <>
            {showLabel === true && (
              <label htmlFor={id} className={labelStyle}>
                {label}
              </label>
            )}
            <input ref={ref} id={id} {...props} />
            {props.error && (
              <label className="error jquery-validation-error small form-text invalid-feedback">
                {props.error}
              </label>
            )}
          </>
        )}
      </>
    );
  }
);

export default Input;