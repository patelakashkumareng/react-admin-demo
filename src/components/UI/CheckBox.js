import React from "react";

const CheckBox = React.forwardRef(({ id, label, text, labelStyle = "", ...props }, ref) => {
  return (
    <label htmlFor={id} className={labelStyle}>
      <input type="checkbox" ref={ref} id={id} {...props} />
      <span className="custom-control-label">{text}</span>
    </label>
  );
});

export default CheckBox;
              