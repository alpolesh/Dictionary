import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HomePage from '../HomePage/HomePage';
import NotFound from '../NotFound/NotFound';
import ResultPage from '../ResultPage/ResultPage';

function App() {
  const dictionaryState = useTypedSelector((state) => state.dictionary);
  const errorMessage = dictionaryState.error;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:word" element={<ResultPage />} />
        <Route path="/notfound" element={<NotFound errorMessage={errorMessage} />} />
      </Routes>
    </div>
  );
}

export default App;
