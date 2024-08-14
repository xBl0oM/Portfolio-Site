import React from 'react';
import "../index.css";
import unihockeyBild from "../assets/unihockeyBild.png";

function Home() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-40 w-full bg-white">
      <div className="flex-grow p-4 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <div className="mb-8 md:mb-0 md:ml-8 md:mr-12 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-blue-900 -mb-2">Grüezi, mein Name ist</h1> 
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-playfair text-gray-800 bg-clip-text mb-2 leading-normal">Jan Frey</h1> 
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair">Schnell im Sport und im Programmieren</h1>
          </div>
          <img src={unihockeyBild} alt="Profilbild von Jan Frey" className="w-40 sm:w-60 md:w-80 rounded-2xl mr-0 md:mr-10 mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Home;
