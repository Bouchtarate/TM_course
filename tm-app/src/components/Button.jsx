import React from "react";

const Button = ({ color, content, clickEvent }) => {
  return (
    <button
      onClick={clickEvent}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {content}
    </button>
  );
};
Button.defaultProps = {
  color: "black",
};
export default Button;
