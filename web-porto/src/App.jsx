import { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Fotoijazah from '../src/Asset/Fotoijazah.jpg'


function App() {

  return <>
  <div className="bg-blue-300 w-screen h-screen flex">
    <div className='w-1/5 flex flex-col justify-center items-center h-screen bg-white border-r-4 border-[#BE9E44]'>
      <div className='bg-[#BE9E44] rounded-full w-[150px] h-[150px] flex justify-center items-center'>
        <img src={Fotoijazah} alt="" className='rounded-full w-[130px] h-[130px]' />
        
      </div>
      <Link to="/" className='text-xl font-bold mt-8'>Biodata</Link>
      <Link to="/Pendidikan" className='text-xl font-bold mt-8'>Pendidikan</Link>
      <Link to="/Keahlian" className='text-xl font-bold mt-8'>Keahlian</Link>
      <Link to="/Exp" className='text-xl font-bold mt-8'>Pengalaman</Link>
      <Link to="/Kontak" className='text-xl font-bold mt-8'>Kontak</Link>
    </div>
    <div className='w-4/5 h-screen bg-[#F1F1F1]'>
      <Outlet/>
    </div>
  </div>
  </>
}

export default App
