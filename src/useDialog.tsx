import { useState } from "react";

function useDialog() {
  const [value, setValue] = useState("");
  const changeValue = (val: string) => {
    setValue(val);
  };
  return changeValue;
}

export default useDialog;
