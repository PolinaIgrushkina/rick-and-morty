import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchAllCharacters } from 'helpers/API';
import ChacartersItem from 'components/ChacartersItem/ChacartersItem';

import css from './CharactersList.module.css';

export default function CharactersList({ searchCharacters }) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getAllCharacters() {
      const res = await fetchAllCharacters(page, searchCharacters);
      setCharacters(res);
    }
    getAllCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    async function getSearchCharacters() {
      const res = await fetchAllCharacters(1, searchCharacters);
      setCharacters(res);
    }
    getSearchCharacters();
  }, [searchCharacters]);

  const inAlphabeticalOrder = characters.sort(
    (firstCharacter, secondCharacter) =>
      firstCharacter.name.localeCompare(secondCharacter.name)
  );

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };
  return (
    <>
      <ul className={css.list}>
        {inAlphabeticalOrder.map(character => (
          <ChacartersItem
            image={character.image}
            name={character.name}
            id={character.id}
            species={character.species}
            key={character.id}
          />
        ))}
      </ul>

      <div className={css.buttonscontainer}>
        <button
          disabled={page <= 1}
          className={page <= 1 ? css.disabled : css.button}
          onClick={handlePrev}
        >
          Prev Page
        </button>
        <p className={css.pageTitle}>Page {page}</p>
        <button
          className={page >= 42 ? css.disabled : css.button}
          onClick={handleNext}
          disabled={page >= 42}
        >
          Next Page
        </button>
      </div>
    </>
  );
}

CharactersList.propTypes = {
  searchCharacters: PropTypes.string.isRequired,
};
