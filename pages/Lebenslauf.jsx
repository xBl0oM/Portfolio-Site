import React from 'react';
import "../index.css";

function Lebenslauf() {
  return (
    <div className="px-4 sm:px-8 lg:mx-40 my-8 lg:my-20 w-full rounded-3xl bg-slate-900 gap-5 relative min-h-screen mx-5">
      <div className="flex justify-center">
        <h1 className="text-3xl lg:text-6xl mt-8 text-amber-100 font-playfair">Lebenslauf</h1>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-60 bottom-20 w-1 bg-amber-100 z-0"></div>

      <div className="flex flex-col xl:flex-row items-center mt-32 relative z-10">
        <h1 className="text-center text-xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 font-playfair">
          2024
        </h1>
        <h1 className="text-xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 xl:mt-0 xl:mr-20 text-amber-100 font-playfair xl:order-1">
          2 Wochen Sprachaufenthalt in <br/> Montpellier
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center mt-20 relative z-10">
        <h1 className="text-center text-xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:order-2 font-playfair">
          2022-jetzt
        </h1>
        <h1 className="text-xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 xl:mt-0 xl:mr-20 text-amber-100 font-playfair xl:order-1">
          IMS Alte Kanti Aarau
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center mt-32 relative z-10">
        <h1 className="text-center text-xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 font-playfair">
          2019-2022
        </h1>
        <h1 className="text-xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 xl:mt-0 xl:mr-20 text-amber-100 font-playfair xl:order-1">
          Bezirksschule Chestenberg
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center mt-40 relative z-10 mb-10">
        <h1 className="text-center text-xl bg-gray-700 py-2.5 px-8 rounded-2xl text-amber-100 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:order-2 font-playfair">
          2013-2019
        </h1>
        <h1 className="text-xl bg-gray-700 py-2.5 px-8 rounded-2xl mt-4 xl:mt-0 xl:mr-20 text-amber-100 font-playfair xl:order-1">
          Grundschule Chestenberg
        </h1>
      </div>
    </div>
  );
}

export default Lebenslauf;
