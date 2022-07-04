import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
