import React, { useState } from 'react';

import css from './CharactersPage.module.css';
import CharactersList from 'components/CharactersList/CharactersList';
import Logo from 'components/Logo/Logo';
import SearchBar from 'components/SearchBar/SearchBar';

export default function CharactersPage() {
  const [searchCharacters, setSearchCharacters] = useState('');

  const handleSubmit = searchName => {
    setSearchCharacters(searchName);
  };

  return (
    <div className={css.page}>
      <Logo />
      <SearchBar onSubmit={handleSubmit} />
      <CharactersList searchCharacters={searchCharacters} />
    </div>
  );
}
