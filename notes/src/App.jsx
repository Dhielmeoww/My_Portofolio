import { useContext, useState } from "react";
import { UserContext } from "./Context/Form";

function App() {
  const defaultInput = {
    Title: "",
    Date: "",
    Body: "",
  };

  const [data, setData] = useState([]);

  const [inputNotes, setInputNotes] = useState({
    ...defaultInput,
  });

  const handleFormInput = (type, value) =>
    setInputNotes({ ...inputNotes, [type]: value });

  const addData = (event) => {
    const saveData = {
      ...inputNotes,
    };

    setData([...data, saveData]);

    setInputNotes({ ...inputNotes });
  };

  const handleForm = (event) => {
    event.preventDefault();
    addData();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="container flex-col justify-center bg-green-400 p-7">
          <div className="flex justify-center">
            <form onSubmit={handleForm}>
              <label>
                {" "}
                <p>Title : </p>
                <input
                  className="border-2 p-3 rounded-xl w-[500px]"
                  placeholder="Input Title"
                  value={inputNotes.Title}
                  onChange={(evt) => handleFormInput("Title", evt.target.value)}
                />
              </label>
              <label>
                {" "}
                <p>Body : </p>
                <textarea
                  className="border-2 p-3 rounded-xl w-[500px]"
                  placeholder="Write here"
                  value={inputNotes.Body}
                  onChange={(evt) => handleFormInput("Body", evt.target.value)}
                />
              </label>
              <p>Save notes with click button below</p>
              <button className="text-center text-slate-50 bg-green-600 w-[100px]">
                Save
              </button>
            </form>
          </div>
          <hr className="my-4" />
          <h1 className="text-center">Notes/Task List</h1>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center mx-[100px] bg-slate-500">
              {data.map((c) => (
                <div
                  key={c.Title}
                  className="flex justify-center flex-col mx-4 "
                >
                  <div className="flex justify-between flex-row bg-green-400 mx-4 mt-4 p-4 w-[500px]">
                    <div className="bg-white">
                      <div className="flex p-4 w-[300px]">{c.Title}</div>
                    </div>
                    <div>
                      <button className="bg-orange-400 text-white p-4">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="bg-white mx-4 p-4 w-[500px]">{c.Body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
