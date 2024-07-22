import React, { useState } from 'react';
import "../index.css";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="h-screen w-56 bg-blue-900 p-4 flex flex-col items-center"> 
      <p className="text-3xl text-white mb-6">Jan Frey</p>
      <ul className="space-y-6 w-full relative"> 
        <li className="text-white text-center text-base"> 
         <a href="Lebenslauf" className=" hover:bg-indigo-900">
          <svg className="w-5 h-5 mr-2 inline-block fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
            <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/>
          </svg>
            Lebenslauf
         </a>  
        </li>
        <li className="relative w-full text-center text-base group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className="text-white font-medium py-2 px-4 rounded focus:outline-none w-full"
            type="button"
          >
            <div>
              <svg className=" w-5 h-5 mr-2 inline-block fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
              </svg>

                About Me
                <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
          </button>
          <ul className={`absolute bg-white shadow-lg mt-2 rounded-lg w-full text-left transition-transform duration-500 transform ${isDropdownOpen ? 'scale-y-100 translate-y-2' : 'scale-y-0'} origin-top`}>
            <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full" href="#Ich">Ich</a></li>
            <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#Schule">Schule</a></li>
            <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full" href="#Sport">Sport</a></li>
          </ul>
        </li>
        <li className={`text-white text-center text-base transition-transform duration-500 transform ${isDropdownOpen ? 'translate-y-28' : ''}`}> 
            <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path fill="white" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
            </svg>
          Projekte
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
