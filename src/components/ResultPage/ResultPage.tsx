import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DictionaryItem } from '../../types/dictionary';
import WordCard from '../WordCard/WordCard';

function ResultPage() {
  const dictionaryState = useTypedSelector((state) => state.dictionary);
  const wordsArray: DictionaryItem[] = dictionaryState.words;
  console.log(wordsArray);
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
