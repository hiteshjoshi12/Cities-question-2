import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Component/Main';
import CityChart from './Component/CityChart'; 


function App() {
  return (
    <div className='min-h-screen'>
      <div className='min-h-screen'>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/chart/:cityName" element={<CityChart  />} />
          </Routes>
        </Router>
      </div>
      </div>
  );
}

export default App;
