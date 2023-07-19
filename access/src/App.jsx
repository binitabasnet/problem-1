import { useReducer, createContext } from "react";

// available colors
const colors = ["red", "green", "blue", "black", "orange"];

// reducer function
const colorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR": {
      const prevColor = state.currentColor;
      const nextColor =
        prevColor === "blue"
          ? "green"
          : colors[Math.floor(Math.random() * colors.length)];
      return {
        currentColor: nextColor,
        colorHistory: [...state.colorHistory, nextColor],
      };
    }

    default:
      return state;
  }
};

// context
const ColorContext = createContext();

// App component
const App = () => {
  const [colorState, dispatch] = useReducer(colorReducer, {
    currentColor: "blue",
    colorHistory: [],
  });

  const handleChangeColor = () => {
    dispatch({ type: "CHANGE_COLOR" });
  };

  return (
    <ColorContext.Provider value={colorState}>
      <div>
        <button
          style={{ backgroundColor: colorState.currentColor }}
          onClick={handleChangeColor}
        >
          Change Color
        </button>

        <p>
          <span
            key={colorState.currentColor}
            style={{ color: colorState.currentColor }}
          >
            {colorState.colorHistory.join(", ")}
          </span>
        </p>
      </div>
    </ColorContext.Provider>
  );
};

export default App;
