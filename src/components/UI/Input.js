import React from "react";

const Input = React.forwardRef(({ id, label, divStyle = '', labelStyle='', ...props }, ref) => {
  // const divStyling = divStyle ? `className=${divStyle}` : ''
  return (
    <div className={divStyle}>
      <label htmlFor={id} className={labelStyle}>{label}</label>
      <input ref={ref} id={id} {...props} />
      {props.error && <label className="error jquery-validation-error small form-text invalid-feedback">{props.error}</label>}
    </div>
  );
});

export default Input;