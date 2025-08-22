import React from "react";
import Menu from '../assets/Menu.jpg'

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="relative bg-cover bg-center h-[600px]">
        <img src={Menu} alt="" className="w-[100%] h-[800px]"/>
        <div className="absolute inset-0 bg-/50 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-[30px] text-lg mb-2 font-bold">Food app</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Why stay hungry when <br />
            you can order from Bella Onojie
          </h1>
          <p className="text-gray-200 mt-4">
            Download the bella onojie’s food app now on
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 cursor-pointer transition-all duration-[500ms]">
              Playstore
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black cursor-pointer transition-all duration-[500ms]">
              App store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
