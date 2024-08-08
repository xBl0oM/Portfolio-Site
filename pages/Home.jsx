import React from 'react';
import "../index.css";
import unihockeyBild from "../assets/unihockeyBild.png"


function Home() {
  return (
    <div className="ml-40 mr-40 ">
      <div className="flex-grow  p-4 min-h-screen flex items-center">
        <div className="flex flex-row items-center justify-center mx-auto">
          <div className="ml-8 mr-12">
            <h1 className="text-5xl font-playfair text-blue-900 -mb-2">Grüezi, mein name ist</h1> 
            <h1 className="text-8xl font-playfair bg-gradient-to-r from-stone-500 to-cyan-500 bg-clip-text text-transparent mb-2 leading-normal">Jan Frey</h1> {/* Added leading-normal to adjust line-height */}
            <h1 className="text-4xl">Schnell im Sport und im Programmieren</h1>
          </div>
          <img src={unihockeyBild} alt="Profilbild von Jan Frey" className="w-80 rounded-2xl mr-10 mt-4" />
        </div>
      </div>
      </div>
  );
}

export default Home;
