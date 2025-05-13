import { Outlet } from 'react-router-dom';
import Header from './components/layout/header';
import axios from './util/axios.customize'
import { useEffect, useState } from 'react'

function App() {
  useEffect(()=>{

    const fetchHelloWorld = async() => {
      const res = await axios.get(`/v1/api`);
      console.log(">>> check res: ", res)
    }
    fetchHelloWorld()
  }, [])
  return (
    <div>
      {/* hello world frontend Reactjs */}
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
