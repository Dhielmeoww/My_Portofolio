import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import './index.css'
import Rootlayout from './template/rootlayout'
import Home from './template/Page/Home'
import Layanan from './template/Page/Layanan'
import Menu from './template/Page/Menu'
import StoreKfc from './template/Page/StoreKfc'
import Kids from './template/Page/Kids'
import Gallery from './template/Page/Gallery'
import Coorperate from './template/Page/Coorperate'
import Automotive from './template/Page/Automotive'
import MenuProvider from './template/Utility/MenuProvider'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children: [
      {path: "", element: <Home/>},
      {path: "/Layanan", element: <Layanan/>},
      {path: "/Menu", element: <Menu/>},
      {path: "/Store", element: <StoreKfc/>},
      {path: "/Kids", element:<Kids/>},
      {path: "/Gallery", element: <Gallery/>},
      {path: "/Corporate", element: <Coorperate/>},
      {path: "/Automotive", element: <Automotive/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuProvider>
  <RouterProvider router={router}/>
  </MenuProvider>
)
