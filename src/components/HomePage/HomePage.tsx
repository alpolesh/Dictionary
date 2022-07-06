import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import searchIcon from '../../images/search__icon.png';

import Spinner from '../Spinner/Spinner';

function HomePage() {
  const dictionaryState = useTypedSelector((state) => state.dictionary);
  const navigate = useNavigate();

  const [valueFromSearchedInput, setValueFromSearchedInput] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/${valueFromSearchedInput}`);
  }

  function handleChangeSearchedInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValueFromSearchedInput(e.target.value);
  }

  return (
    dictionaryState.loading
      ? <Spinner />
      : (
        <div className="homepage">
          <div className="search">
            <form name="search__form" onSubmit={handleSubmit} className="search__form">
              <div className="search__container">
                <input
                  type="text"
                  value={valueFromSearchedInput || ''}
                  onChange={handleChangeSearchedInput}
                  className="search__input"
                  placeholder="Word"
                />
                <button type="submit" className="search__submit">
                  <img className="search__icon" src={searchIcon} alt="search icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )
  );
}

export default HomePage;
