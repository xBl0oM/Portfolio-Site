import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Lebenslauf from './pages/Lebenslauf';
import AboutMe from './pages/AboutMe'
import Projekte from './pages/Projekte'
import Kontakt from './pages/Kontakt'


class App extends Component {
    render() { 
      return (
        <Router>
          <div className="flex">
            <Sidebar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Lebenslauf" element={<Lebenslauf />} />
              <Route path="AboutMe" element={<AboutMe/>}/>
              <Route path="Projekte" element={<Projekte/>}/>
              <Route path="Kontakt" element={<Kontakt/>}/>
            </Routes>
          </div>
        </Router>
      )
    }
}
  
export default App;
 