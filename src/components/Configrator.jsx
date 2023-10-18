import { useState } from "react";
import React from "react";
import { ShirtColors, useCustomization } from "../contexts/customization";

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Configrator() {
  const [showColor, setShowColor] = useState(false);

  function handleButton() {
    setShowColor((show) => !show);
  }

  return (
    <div className="Config">
      {/* {button && <Colors />} */}
      <Button onClick={handleButton}>C</Button>
      {showColor && <Colors />}
    </div>
  );
}

function Colors() {
  const { ShirtColor, setShirtColor } = useCustomization();
  return (
    <div className="CoMain">
      {ShirtColors.map((item, index) => (
        <div
          className={`item ${
            item.color === ShirtColor.color ? "item--active" : ""
          }`}
          key={index}
          onClick={() => setShirtColor(item)}
        >
          <div className="colorList" style={{ backgroundColor: item.color }} />
        </div>
      ))}
    </div>
  );
}
