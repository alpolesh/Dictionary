import React, { /* useEffect */ } from 'react';
import {
  Routes, Route, /* useLocation */
} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ResultPage from '../ResultPage/ResultPage';

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:word" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
