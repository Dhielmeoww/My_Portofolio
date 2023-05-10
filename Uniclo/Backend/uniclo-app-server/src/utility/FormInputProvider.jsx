import { createContext, useState } from "react";

export const InputContext = createContext();

export default function FormInputProvider(props) {
  const defaultInput = {
    id: 0,
    name: "",
    type: "",
    price: "",
    desc: "",
    umgUrl: "",
  };

  const [formInput, setFormInput] = useState({ ...defaultInput });

  const handleChange = (type, value) => {
    setFormInput({ ...formInput, [type]: value });
  };

  const shareValue = {
    formInput,
    setFormInput,
    handleChange,
  };

  return (
    <InputContext.Provider value={shareValue}>
      {props.children}
    </InputContext.Provider>
  );
}
