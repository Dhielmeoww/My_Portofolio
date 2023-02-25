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

    setInputNotes({ ...defaultInput });
  };

  const removeNote = (removeid) => {
    const noteIndex = data.findIndex((datas) => datas.id === removeid);
    const copyData = [...data];
    copyData.splice(noteIndex, 1);
    setData(copyData);
  };

  const handleForm = (event) => {
    event.preventDefault();
    addData();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="container flex-col justify-center bg-white-400 pb-7">
          <div className="flex justify-center bg-green-400 ">
            <form onSubmit={handleForm}>
              <h1 className="my-5 text-2xl font-bold text-white text-center">
                MY NOTES
              </h1>
              <label>
                {" "}
                <p>Title : </p>
                <input
                  className="border-2 p-3 rounded-xl w-[900px]"
                  placeholder="Input Title"
                  value={inputNotes.Title}
                  onChange={(evt) => handleFormInput("Title", evt.target.value)}
                />
              </label>
              <label>
                {" "}
                <p className="mt-4">Body : </p>
                <textarea
                  className="border-2 p-3 rounded-xl w-[900px]"
                  placeholder="Write here"
                  value={inputNotes.Body}
                  onChange={(evt) => handleFormInput("Body", evt.target.value)}
                />
              </label>
              <p className="py-2">Save notes with click button below</p>
              <div className="flex justify-center py-2 mb-2">
                <button className="text-center text-slate-50 bg-orange-400 w-[100px] py-4 rounded-xl">
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="flex justify-center">
            <div className="container flex flex-col justify-center bg-slate-500 pb-4">
              <h1 className="text-center my-4 text-white text-2xl font-bold">Notes/Task List</h1>
              {data.map((c) => (
                <div
                  key={c.Title}
                  className="flex justify-center flex-col mx-4 px-4"
                >
                  <div className="container bg-blue-400 flex justify-between flex-row mt-4">
                    <div className="">
                      <div className="flex p-4 w-[300px] text-white text-lg font-bold h-[50px]">Notes : {c.Title}</div>
                    </div>
                    <div>
                      <button className="bg-orange-400 text-white p-4 h-[50px]" onClick={removeNote}>
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="container bg-white p-4">{c.Body}</div>
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
