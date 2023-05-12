import axios from "axios";
import { createContext, useContext, useState } from "react";

export const InputContext = createContext();

export default function FormInputProvider(props) {
  const defaultInput = {
    id: 0,
    name: "",
    type: "",
    price: 0,
    desc: "",
    imgUrl: "",
  };

  const [formInput, setFormInput] = useState({ ...defaultInput });

  const handleChange = (type, value) => {
    setFormInput({ ...formInput, [type]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await axios.post("http://localhost:8080/api/items", formInput);

    setFormInput({ ...defaultInput });
  };

  const shareValue = {
    formInput,
    setFormInput,
    handleChange,
    handleSubmit,
  };

  return (
    <InputContext.Provider value={shareValue}>
      {props.children}
    </InputContext.Provider>
  );
}
