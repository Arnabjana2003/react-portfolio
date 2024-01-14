import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" text-slate-800">
      <main className=" lg:max-w-5xl md:max-w-3xl md:mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
