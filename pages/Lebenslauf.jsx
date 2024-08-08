import React from 'react'
import "../index.css";

function Lebenslauf() {
  return (
    <div className="ml-40 mr-40 mt-20 mb-20 w-full rounded-3xl bg-slate-900 gap-5 relative min-h-screen ">
      <div className="flex justify-center ">
        <h1 className="text-6xl mt-8 text-amber-100 font-playfair">Lebenslauf </h1>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-60 bottom-20 w-1 bg-amber-100 z-0"></div>

      <div className="flex items-center mt-32 relative z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-center text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 font-playfair">2024</h1>
        </div>
        <div className="ml-auto">
          <h1 className="text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl mr-10 text-amber-100 font-playfair">2 Wochen Sprachaufenthalt <br/> in Montpellier</h1>
        </div>
      </div>

      <div className="flex items-center space-x-20 mt-20 relative z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-center text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 font-playfair">2022-jetzt</h1>
        </div>
        <h1 className="text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl ml-96 text-amber-100 font-playfair">IMS Alte Kanti Aarau</h1> 
      </div>

      <div className="flex items-center mt-32 relative z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-center text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 font-playfair">2019-2022</h1>
        </div>
        <div className="ml-auto">
          <h1 className="text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl mr-10 text-amber-100 font-playfair">Bezirksschule Chestenberg</h1>
        </div>
      </div>

      <div className="flex items-center space-x-20 mt-40 relative z-10 mb-10">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-center text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 font-playfair">2013-2019</h1>
        </div>      
        <h1 className="text-2xl block bg-gray-700 py-2.5 px-8 rounded-2xl ml-96 text-amber-100 font-playfair">Grundschule </h1>
      </div>
    </div>
  )
}
export default Lebenslauf
