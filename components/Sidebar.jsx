import React, { useState } from 'react';
import '../index.css';
import { HashLink as Link } from 'react-router-hash-link';

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); 

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -30;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

 
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={`h-screen bg-gradient-to-r from-slate-500 to-slate-800 p-4 flex flex-col sticky top-0 ${isSidebarExpanded ? 'w-56' :''} transition-width duration-300`}>
      <div className="flex items-center justify-between">
        <p className={`text-white ${isSidebarExpanded ? 'text-3xl' : 'text-lg'} transition-all duration-300 mb-16 mt-4`}>
          {isSidebarExpanded ? 'Jan Frey' : 'JF'}
        </p>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isSidebarExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
      <ul className="space-y-6 w-full relative">
        <li className="text-white text-center text-base ">
          <Link to="/" className="hover:bg-slate-700 p-2 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16" className="w-5 h-5 mr-2">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
            {isSidebarExpanded && <span>Home</span>}
          </Link>
        </li>
        <li className="text-white text-center text-base">
          <Link to="/Lebenslauf" className="hover:bg-slate-700 p-2 rounded-md flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
              <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/>
            </svg>
            {isSidebarExpanded && <span>Lebenslauf</span>}
          </Link>
        </li>
        <li className="relative w-full text-center text-base group hover:bg-slate-700 rounded-md my-10"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/AboutMe" className="text-white font-medium focus:outline-none w-full flex items-center justify-center">
            <div className="my-2 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
              </svg>
              {isSidebarExpanded && <span>About Me</span>}
              <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </Link>
          {isSidebarExpanded && (
            <ul className={`absolute bg-white shadow-lg mt-2 rounded-lg w-full text-left transition-transform duration-500 transform ${isDropdownOpen ? 'scale-y-100 translate-y-0' : 'scale-y-0'} origin-top`}>
              <li><Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full" to="/AboutMe#Ich" scroll={el => scrollWithOffset(el)}>Ich</Link></li>
              <li><Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100" to="/AboutMe#Kenntnisse" scroll={el => scrollWithOffset(el)}>Kenntnisse</Link></li>
              <li><Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100" to="/AboutMe#Sport" scroll={el => scrollWithOffset(el)}>Sport</Link></li>
              <li><Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-xl" to="/AboutMe#Freizeit" scroll={el => scrollWithOffset(el)}>Freizeit</Link></li>
            </ul>
          )}
        </li>
        <li className={`text-white text-center text-base transition-transform duration-500 transform ${isDropdownOpen ? 'translate-y-40' : ''}`}>
          <Link to="/Projekte#Projekte" className="hover:bg-slate-700 p-2 rounded-md flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
              <path fill="#FFFF"d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/>
            </svg>
            {isSidebarExpanded && <span>Projekte</span>}
          </Link>
        </li>
        <li className={`text-white text-center text-base transition-all duration-500 flex items-center justify-center ${isSidebarExpanded ? 'w-full' : 'w-10'} transition-transform duration-500 transform ${isDropdownOpen ? 'translate-y-40' : ''} overflow-hidden`}>
          <Link to="/Kontakt" className="hover:bg-slate-700 p-2 rounded-md flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            {isSidebarExpanded && <span>Kontakt</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
