import React from "react";

const CheckBox = ({ id, label, text, labelStyle = "", ...props }) => {
  return (
    <label htmlFor={id} className={labelStyle}>
      <input type="checkbox" id={id} {...props} />
      <span className="custom-control-label">{text}</span>
    </label>
  );
};

export default CheckBox;
              