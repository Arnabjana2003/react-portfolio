import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [darkTheme,setdarkTheme] = useState(false)

  const changeTheme = ()=>{
    if(darkTheme){
      document.documentElement.classList.add('dark')
      setdarkTheme(pre=>!pre)
    }else{
      document.documentElement.classList.remove('dark')
      setdarkTheme(pre=>!pre)
    }
  }
  return (
    <div className="overflow-x-hidden  text-slate-800 dark:text-slate-300">
      <button className="dark:text-white fixed top-28 right-2 px-2 border rounded" onClick={changeTheme}>Theme</button>
      <main className=" lg:max-w-5xl md:max-w-3xl md:mx-auto">
        <div className=" z-50 fixed top-0 right-0 left-0 backdrop-blur-xl">
        <Header/>
        </div>
        <div className=" mt-28">
        <Outlet />
        </div>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
