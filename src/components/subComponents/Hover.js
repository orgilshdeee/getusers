import { useState } from "react";

function Hover(props) {
  const [hover, setHover] = useState(false);
  const hoverStyle = {
    height: hover ? "100px" : "50px",
    width: hover ? "150px" : "100px",
    backgroundColor: hover ? "violet" : "green",
    transition: "0.5s ease",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    border: props.isSelected ? "2px red solid" : "none",
  };

  return (
    <>
      <button
        style={hoverStyle}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={props.onClick}
        name={props.data}
      >
        {props.data}
      </button>
    </>
  );
}

export default Hover;
