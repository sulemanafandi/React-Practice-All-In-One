import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
    "brown",
    "black",
    "gray",
  ];
  const [selectedColor, setSelectedColor] = useState("transparent");
  return (
    <>
      <h1>🎨 Color Swicher</h1>
      <div className="flex gap-4 my-7">
        {colors.map((item) => (
          <Button key={item} color={item} setSelectedColor={setSelectedColor}>
            {item}
          </Button>
        ))}
      </div>

      <ColorBox color={selectedColor} />
    </>
  );
}

export default App;
