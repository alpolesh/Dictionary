import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
import searchIcon from '../../images/search__icon.png';
import { fetchWordDefinitions } from '../../store/action-creators/dictionary';
import { AppDispatch } from '../../types/dictionary';

function HomePage() {
  // const state = useTypedSelector((state) => state);
  const dispatch: AppDispatch = useDispatch();

  const [valueFromSearchedInput, setValueFromSearchedInput] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(fetchWordDefinitions(valueFromSearchedInput));
  }

  function handleChangeSearchedInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValueFromSearchedInput(e.target.value);
  }

  return (
    <div className="homepage">
      <div className="search" />
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
  );
}

export default HomePage;
