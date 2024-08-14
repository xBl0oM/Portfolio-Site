import React from 'react';
import "../index.css";

function Lebenslauf() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:mx-40 lg:my-20 w-full rounded-3xl bg-slate-900 gap-5 relative min-h-screen">
      <div className="flex justify-center">
        <h1 className="text-4xl lg:text-6xl mt-8 text-amber-100 font-playfair">Lebenslauf</h1>
      </div>

    
      <div className="absolute left-1/2 transform -translate-x-1/2 top-60 bottom-20 w-1 bg-amber-100 z-0"></div>

    
      <div className="flex flex-col sm:flex-row items-center mt-32 relative z-10">
        <h1 className="text-center text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          2024
        </h1>
        <h1 className="text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 sm:mt-0 sm:ml-20 md:ml-10 lg:ml-0 text-amber-100 font-playfair">
          2 Wochen Sprachaufenthalt <br/> in Montpellier
        </h1>
      </div>

     
      <div className="flex flex-col sm:flex-row items-center mt-20 relative z-10">
      <h1 className="text-center text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:order-2">
          2022-jetzt
        </h1>
        <h1 className="text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 sm:mt-0 sm:mr-20 md:ml-10 lg:ml-0 text-amber-100 font-playfair sm:order-1">
          IMS Alte Kanti Aarau
        </h1>
        
      </div>

      
      <div className="flex flex-col sm:flex-row items-center mt-32 relative z-10">
        <h1 className="text-center text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          2019-2022
        </h1>
        <h1 className="text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 sm:mt-0 sm:ml-20 md:ml-10 lg:ml-0 text-amber-100 font-playfair">
          Bezirksschule Chestenberg
        </h1>
      </div>

     
      <div className="flex flex-col sm:flex-row items-center mt-40 relative z-10 mb-10">
      <h1 className="text-center text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:order-2">
          2013-2019
        </h1>
        <h1 className="text-2xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 sm:mt-0 sm:mr-20 text-amber-100 font-playfair sm:order-1">
          Grundschule Chestenberg
        </h1>
        
      </div>
    </div>
  );
}

export default Lebenslauf;
