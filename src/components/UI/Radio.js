import React from "react";

const Radio = ({ id, label, labelStyle = "", ...props }) => {
  return (
    <label htmlFor={id} className={labelStyle}>
      <input id={id} {...props} />
      <span className="form-check-label">{label}</span>
    </label>
  );
};

export default Radio;
