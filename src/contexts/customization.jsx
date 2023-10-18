import { createContext, useContext, useState } from "react";
import React from "react";

const CustomizationContext = createContext({});

export const ShirtColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "blue",
  },
  {
    color: "#ffffff",
    name: "white",
  },
];

export const Customization = (props) => {
  const [ShirtColor, setShirtColor] = useState(ShirtColors[0]);
  return (
    <CustomizationContext.Provider
      value={{
        ShirtColor,
        setShirtColor,
        ShirtColors,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
