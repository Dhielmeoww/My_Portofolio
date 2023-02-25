import {createContext, useState} from "react"

export const UserContext = createContext();

export default  function Form(props){

    const defaultInput = {
        Title : "",
        Date : "",
        Body : ""
    }

    const [Input, setInput] = useState({
        Title : "",
        Date : "",
        Body : ""
    });

    const shareValue = {
        Input, setInput
    }

    return (
        <UserContext.Provider value={shareValue}>
          {props.children}
        </UserContext.Provider>
      );

}