import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchCharacters } from 'helpers/API';
import ChacartersItem from 'components/ChacartersItem/ChacartersItem';
import css from './CharactersList.module.css';
import Loader from 'components/Loader/Loader';

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [status, setStatus] = useState('init');

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    setStatus('loading');
    try {
      async function getAllCharacters() {
        const res = await fetchCharacters(page, name);
        setCharacters(res.results);
        setPages(res.info.pages);
        setStatus('success');
      }
      getAllCharacters();
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
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
      {status === 'init'}
      {status === 'success' && (
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
      )}
      {status === 'loading' && <Loader />}
      {status === 'error' && <p>Error! Попробуйте найти что-то другое.</p>}
    </>
  );
}
