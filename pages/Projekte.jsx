import React from 'react';
import "../index.css";
import plauderPinguinConvo from '../assets/plauderPinguinConvo.png'
import escapeToDubai from '../assets/escapeToDubai.png'

function Projekte() {
  return (
    <div id ="Projekte" className="w-full min-h-screen flex justify-center items-center py-20">
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] rounded-3xl bg-slate-900 relative">
        <div className="flex justify-center">
          <h1 className="text-6xl mt-8 text-amber-100 font-playfair">Projekte</h1>
        </div>
      
        <div className="text-amber-100 flex flex-col lg:flex-row lg:gap-5">
          <div className="lg:w-1/2 text-4xl mt-10 mx-5 lg:ml-10">
            PlauderPinguin
            <img src={plauderPinguinConvo} alt="Loginpage von PlauderPinguin" className="w-full lg:w-80 rounded-xl mt-5 mb-5" />
          </div>
          <div className="lg:w-1/2 text-xl mt-5 lg:mt-44 lg:mr-10 mb-5 mx-5">
            PlauderPinguin ist eine einfache Web-Chat-Anwendung, die es Nutzern ermöglicht, miteinander zu kommunizieren. Benutzer müssen sich zuerst registrieren und dann anmelden, um mit anderen Nutzern chatten zu können. Die App basiert auf einer ASP.NET Core-Web-API im Backend und auf React.js mit Vanilla CSS im Frontend.
          </div>
        </div>

        <div className="text-amber-100 bg-gray-700 flex flex-col lg:flex-row lg:gap-5 rounded-b-3xl">
          <div className="lg:w-1/2 text-4xl mt-10 lg:ml-10  mx-5">
            Escape to Dubai
            <img src={escapeToDubai} alt="Escape to Dubai Bild" className="w-full lg:w-80 rounded-xl mt-5 mb-5" />
          </div>
          <div className="lg:w-1/2 text-xl mt-5 lg:mt-10 lg:mr-10 mb-5 mx-5">
            Escape to Dubai ist ein 2D-Jump-and-Run-Spiel in Unity. Das Ziel ist es, mit dem Charakter drei verschiedene Levels zu überstehen. Diese Levels bieten unterschiedliche Szenerien: angefangen bei einem Bahnhof, über einen Flughafen bis hin zu Dubai selbst. Außerdem bietet Escape to Dubai einen Levelselector und einen Start-Screen. Das Spiel wurde mit Hilfe von Unity-Presets und C# programmiert.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projekte;
