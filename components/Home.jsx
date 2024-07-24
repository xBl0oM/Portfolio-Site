import React from 'react';
import "../index.css";
import unihockey_image from "../assets/unihockey-bild.png"

function Home() {
  return (
    <div className="flex-grow bg-gray-50 p-4 min-h-screen flex items-center">
      <div className="flex flex-row items-center justify-center mx-auto">
        <div className="ml-8 mr-12">
          <h1 className="text-5xl font-playfair text-blue-900 -mb-2">Mein Name ist</h1> 
          <h1 className="text-8xl font-playfair bg-gradient-to-r from-stone-500 to-cyan-500 bg-clip-text text-transparent mb-2 leading-normal">Jan Frey</h1> {/* Added leading-normal to adjust line-height */}
          <h1 className="text-4xl">Schnell im Sport und im Programmieren</h1>
        </div>
        <img src={unihockey_image} alt="Profilbild von Jan Frey" className="w-80 rounded-2xl mr-28 mt-4" />
      </div>
    </div>
  );
}

export default Home;
