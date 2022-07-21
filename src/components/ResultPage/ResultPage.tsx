import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchWordDefinitions, resetDictionary } from '../../store/action-creators/dictionary';
import { AppDispatch, DictionaryItem } from '../../types/dictionary';
import Spinner from '../Spinner/Spinner';
import WordCard from '../WordCard/WordCard';

function ResultPage() {
  const dispatchAsync: AppDispatch = useDispatch();
  const dispatchSync = useDispatch();
  const { word } = useParams();
  const navigate = useNavigate();
  const dictionaryState = useTypedSelector((state) => state.dictionary);
  const wordsArray: DictionaryItem[] = dictionaryState.words;
  useEffect(() => {
    dispatchSync(resetDictionary());
    if (word) {
      dispatchAsync(fetchWordDefinitions(word));
    }
  }, [word]);
  useEffect(() => {
    if (dictionaryState.error) {
      navigate('/notfound');
    }
  }, [dictionaryState.error]);

  return (
    dictionaryState.loading
      ? <Spinner />
      : (
        <div className="result-page">
          <div className="results">
            <section className="results__word-cards">
              {wordsArray.map((item, index) => (
                <WordCard wordData={item} key={index + item.license.name} />
              ))}
            </section>
          </div>
        </div>
      )
  );
}

export default ResultPage;
