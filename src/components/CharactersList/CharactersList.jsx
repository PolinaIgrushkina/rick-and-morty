import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchCharacters } from 'helpers/API';
import ChacartersItem from 'components/ChacartersItem/ChacartersItem';
import css from './CharactersList.module.css';

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    async function getAllCharacters() {
      const res = await fetchCharacters(page, name);
      setCharacters(res.results);
      setPages(res.info.pages);
    }
    getAllCharacters();
  }, [page, name]);

  const inAlphabeticalOrder = characters?.sort(
    (firstCharacter, secondCharacter) =>
      firstCharacter.name.localeCompare(secondCharacter.name)
  );

  const handleChangePage = newPage => {
    setSearchParams({
      name,
      page: newPage,
    });
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
          disabled={Number(page) === 1}
          className={Number(page) === 1 ? css.disabled : css.button}
          onClick={() => handleChangePage(Number(page) - 1)}
        >
          Prev Page
        </button>
        <p className={css.pageTitle}>Page {page}</p>
        <button
          className={Number(page) === pages ? css.disabled : css.button}
          onClick={() => handleChangePage(Number(page) + 1)}
          disabled={Number(page) === pages}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
