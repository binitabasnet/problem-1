import { useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState("red");
  const [colorHistory, setColorHistory] = useState([]);

  const colors = ["red", "green", "blue", "black", "orange"];

  const handleClick = () => {
    let nextColor;

    if (color === "blue") {
      nextColor = "green";
    } else {
      const availableColors = colors.filter((c) => c !== color);
      nextColor =
        availableColors[Math.floor(Math.random() * availableColors.length)];
    }

    setColor(nextColor);
    setColorHistory((prevHistory) => [...prevHistory, nextColor]);
  };
  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        Change Color
      </button>
      <p>
        Color History:{" "}
        {colorHistory
          .map((color, index) => (
            <span key={index} style={{ color }}>
              {JSON.stringify.color}
            </span>
          ))
          .join(", ")}
      </p>
    </div>
  );
};

export default ColorButton;
