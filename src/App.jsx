import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" text-slate-800 overflow-x-hidden bg-gray-100">
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
