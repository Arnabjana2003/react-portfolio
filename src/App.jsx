import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className=" text-slate-800 overflow-x-hidden bg-gray-100">
      <main className=" lg:max-w-5xl md:max-w-3xl md:mx-auto">
        <Header/>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
