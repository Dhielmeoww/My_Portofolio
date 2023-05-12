import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-xl font-bold text-center">Data Warehouse Uniclo</h1>
      <div className="flex justify-center my-5 text-xl ">
        <ul className="flex">
          <li className="mx-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-10">
            <Link to="/Pakaian">Pakaian</Link>
          </li>
          <li className="mx-10">
            <Link to="/Celana">Celana</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
