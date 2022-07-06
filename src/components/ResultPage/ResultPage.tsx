import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchWordDefinitions } from '../../store/action-creators/dictionary';
import { AppDispatch, DictionaryItem } from '../../types/dictionary';
import WordCard from '../WordCard/WordCard';

function ResultPage() {
  const dispatch: AppDispatch = useDispatch();
  const { word } = useParams();
  const dictionaryState = useTypedSelector((state) => state.dictionary);
  const wordsArray: DictionaryItem[] = dictionaryState.words;
  useEffect(() => {
    if (!dictionaryState.words.length && word) {
      dispatch(fetchWordDefinitions(word));
    }
  }, [word]);
  return (
    <div className="result-page">
      <div className="results">
        <section className="results__word-cards">
          {wordsArray.map(() => (
            <WordCard />
          ))}
        </section>
      </div>
    </div>
  );
}

export default ResultPage;
