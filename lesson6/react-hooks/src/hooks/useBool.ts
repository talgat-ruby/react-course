import { useState } from "react";

function useBool(defaultValue = false) {
  const [bool, setBool] = useState(defaultValue);

  const toggle = () => {
    setBool((bool) => !bool);
  };

  return { bool, toggle };
}

export default useBool;
