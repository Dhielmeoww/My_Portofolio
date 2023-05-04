import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <div>
        Data Warehouse Uniclo
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Pakaian">Pakaian</Link>
        <Link to="/Celana">Celana</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App
