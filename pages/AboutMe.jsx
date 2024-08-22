import React from 'react';
import "../index.css";
import uauBild_wide2 from "../assets/uauBild_wide2.png";


function AboutMe() {
  return (
    <div className="  px-5 my-10 lg:mx-40 lg:my-20 w-full gap-5 relative min-h-screen">
    <div id="Ich" className=" w-full h-auto bg-slate-900 rounded-t-3xl flex flex-col lg:flex-row items-start">
      <h1 className="font-playfair text-4xl lg:text-7xl text-amber-100 ml-10 py-10">
        Wer ist <br />
        Jan Frey?
      </h1>
      <div className="font-playfair text-lg lg:text-xl text-amber-100 ml-10 lg:ml-40 mr-5 pt-10 py-10">
        <div className="flex">
          <div className="w-2/4 lg:w-1/4">Name:</div>
          <div className="w-2/4 lg:w-3/4">Frey</div>
        </div>
        <div className="flex">
          <div className="w-2/4 lg:w-1/4">Vorname:</div>
          <div className="w-2/4 lg:w-3/4">Jan Alexander</div>
        </div>
        <div className="flex">
          <div className="w-2/4 lg:w-1/4">Alter:</div>
          <div className="w-2/4 lg:w-3/4">18</div>
        </div>
        <div className="flex">
          <div className="w-2/4 lg:w-1/4">Geburstag:</div>
          <div className="w-2/4 lg:w-3/4">15.05.2006</div>
        </div>
        <div className="flex">
          <div className="w-2/4 lg:w-1/4">Grösse:</div>
          <div className="w-2/4 lg:w-3/4">187cm</div>
        </div>
        <div className="flex">
          <div className="w-2/4 lg:w-1/4">Ausbildung:</div>
          <div className="w-2/4 lg:w-3/4">Informatiker EFZ in Ausbildung an der Informatik​mittelschule Aarau</div> 

        </div>
        <div className="flex">
          <div className="w-2/4 lg:w-1/4">Adresse:</div>
          <div className="w-2/4 lg:w-3/4">Krümblerweg 6, 5103 Möriken</div>
        </div>
      </div>
    </div>

    <div className="w-full h-auto bg-gray-700 flex flex-col lg:flex-row items-start">
  <div id="Kenntnisse" className="mb-10 relative">
    <div className="block lg:hidden font-playfair text-4xl text-amber-100 pt-10 pb-5 ml-10"> 
    Kenntnisse 
    </div>
    <h1 className="mr-auto text-amber-100 text-lg lg:text-xl font-playfair mx-10 pt-10">
      In meiner Zeit an der IMS Aarau habe ich folgende <br /> Kenntnisse durch Projekte erworben:
    </h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-auto ml-10 lg:ml-24 text-amber-100 text-lg lg:text-xl font-playfair pl-10 mt-5">
      <li className="bg-slate-900 w-40 lg:w-56 h-32 lg:h-40 rounded-lg my-8 flex flex-col items-center justify-center">
        <span className="text-center">C# .NET</span>
        <svg className="w-16 lg:w-24 mt-2" viewBox="0 -1.428 255.582 290.108" xmlns="http://www.w3.org/2000/svg">
        <svg preserveAspectRatio="xMidYMid" viewBox="0 -1.428 255.582 290.108" xmlns="http://www.w3.org/2000/svg">
        <path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc"/><path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068"/><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091"/><g fill="#fff"><path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"/><path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"/></g></svg>
        </svg>
      </li>
      <li className="bg-slate-900 w-40 lg:w-56 h-32 lg:h-40 rounded-lg my-8 flex flex-col items-center justify-center">
        <span>SQL</span>
        <svg className="w-16 lg:w-24 mt-2" viewBox="-8.78 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <svg viewBox="-8.78 0 70 70"  xmlns="http://www.w3.org/2000/svg">
          <path d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z" fill="#00bcf2" transform="translate(-830.906 -943.981)"/>
        </svg>
        </svg>
      </li>
      <li className="bg-slate-900 w-40 lg:w-56 h-32 lg:h-40 rounded-lg my-8 flex flex-col items-center justify-center">
        <span>MongoDB</span>
        <svg className="w-16 lg:w-24 mt-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <circle cx="512" cy="512" r="512" fill="#13aa52"/>
          <path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z" fill="#fff"/>
        </svg>
        </svg>
      </li>
      <li className="bg-slate-900 w-40 lg:w-56 h-32 lg:h-40 rounded-lg my-8 flex flex-col items-center justify-center">
        <span>Javascript</span>
        <svg className="w-16 lg:w-24 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052">
         <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
        </svg>
      </li>
      <li className="bg-slate-900 w-40 lg:w-56 h-32 lg:h-40 rounded-lg my-8 flex flex-col items-center justify-center">
        <span>ReactJS</span>
        <svg className="w-16 lg:w-24 mt-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
          </svg>
        </svg>
      </li>
      <li className="bg-slate-900 w-40 lg:w-56 h-32 lg:h-40 rounded-lg my-8 flex flex-col items-center justify-center">
        <span>Tailwind CSS</span>
        <svg className="w-16 lg:w-24 mt-2" fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
        </svg>

      </li>
    </ul>
    
    <div className="hidden lg:block absolute -top-4 -right-10 lg:-right-40 font-playfair text-4xl lg:text-7xl text-amber-100 py-10"> 
      Kenntnisse
    </div>

  </div>
</div>

<div id="Sport" className="w-full h-auto bg-slate-900 flex flex-col lg:flex-row items-start">
  <div className="block lg:hidden font-playfair text-4xl text-amber-100 ml-10 pt-10 py-10">
    Sport
  </div>
  <div className="font-playfair text-7xl text-amber-100 ml-10 pt-10 py-10 hidden lg:block">
    Sport
    <div>
      <img src={uauBild_wide2} alt="Jan Frey am Unihockey spielen" className="w-64 ml-2 py-10" />
    </div>
  </div>
  <div className="font-playfair text-xl text-amber-100 mx-10 lg:ml-40 pt-10 py-10">
    Seit ich sechs Jahre alt bin, spiele ich Unihockey. Für den Club Pauermäuse Brugg
    bestritt ich meine ersten Matches und fand schnell Spass am Ballsport. Nach einigen
    Jahren wechselte ich schliesslich zum 2. Ligisten Unihockey Aargau United, was meiner
    sportlichen Entwicklung enorm half.

    Nachdem ich die Stufen U14 bis U18 durchlaufen hatte, wurde ich aufgrund meiner 
    Führungsqualitäten und des Respekts, den ich von meinen Mitspielern erhalten habe, 
    Captain der U18 und Stammspieler in der U21. Ich entschloss mich, mein Können unter 
    Beweis zu stellen und den Sprung in ein Team der obersten Schweizer Liga zu schaffen. 
    Dieses Ziel habe ich erreicht und konnte zur Saison 2024-2025 zu Unihockey Basel Regio 
    in die U21-A wechseln.
  </div>
</div>

<div className="w-full h-auto bg-gray-700 flex flex-col lg:flex-row items-start rounded-b-3xl">
  <div id="Freizeit" className="mb-10 relative flex w-full flex-col lg:flex-row">
    <div className="block lg:hidden font-playfair text-4xl text-amber-100 py-10 ml-10">
      Freizeit
    </div>
    <div className="w-full lg:w-1/2">
      <h1 className="text-amber-100 text-xl font-playfair mx-10 pt-10">
        In meiner Freizeit bin ich seit zwei Jahren als lizensierter Unihockey-Schiedsrichter 
        in der Klasse G-4 tätig. Dadurch ich konnte ich mein Handeln in hektischen Situationen 
        mit fremden Personen stark verbessern. Ausserdem fördert das Schiedsrichter dasein die 
        zwischenmenschliche Kommunikation. Vor meiner Schiedsrichterkarriere war ich zwei Jahre 
        lang als Trainer von diversen Junioren tätig. Dabei habe ich besonders das gestalten der 
        Trainings und das weitergeben meines Wissens genossen. 
        Neben meiner starken Leidenschaft zum Unihockey, sind meine Freunde ein wichtiger Teil meines 
        Lebens. Mit ihnen verbringe ich sehr viel Zeit, sei es in der Schule, bei Ausflügen oder Online.            
      </h1>
    </div>
    <div className="w-full lg:w-1/2 flex justify-end items-start">
      <div className="hidden lg:block font-playfair text-7xl text-amber-100 py-10 mr-20">
        Freizeit
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default AboutMe;
