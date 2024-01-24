import React from "react";

const Radio = React.forwardRef(({ id, label, labelStyle = "", ...props }, ref) => {
  return (
    <label htmlFor={id} className={labelStyle}>
      <input ref={ref} {...props} id={id} />
      <span className="form-check-label">{label}</span>
    </label>
  );
});

export default Radio;
