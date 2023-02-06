import { useEffect, useState } from "react";
import { statLogin, statLogout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultInput = {
  username: "",
  password: "",
};

function LoginPage() {
  const [formInput, setFormInput] = useState({ ...defaultInput });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

//   const [saveUser, setSaveUser] = useState(localStorage.getItem("saveUser"));

  const navigate = useNavigate();

  const handleFormInput = (type, value) =>
    setFormInput({ ...formInput, [type]: value });

  const userLogin = async (evt) => {
    evt.preventDefault();
    const user = await axios.post(
      "https://dummyjson.com/auth/login",
      formInput
    );
    dispatch(
      statLogin(user.data)
    );
    setFormInput({ ...defaultInput });
    localStorage.setItem("user",JSON.stringify(user.data));
    navigate("/Admin");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    userLogin();
  };

  return (
    <>
      <div className="container">
        <h1 className="text-3xl text-center pt-9">Please Login First</h1>
        <form onSubmit={handleSubmit} className="text-center p-9">
          <label>
            Username :
            <input
              type="text"
              value={formInput.username}
              onChange={(evt) => handleFormInput("username", evt.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Password :
            <input
              type="password"
              value={formInput.password}
              onChange={(evt) => handleFormInput("password", evt.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <button
            className="bg-blue-200 rounded-xl w-[200px] pb"
            onClick={userLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
