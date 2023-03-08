import { fetchCharacterDetails } from 'helpers/API';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import css from './CharacterDetailsPage.module.css';

export default function CharacterDetailsPage() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/characters';

  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getDetails() {
      const details = await fetchCharacterDetails(id);
      setCharacter(details);
    }
    getDetails();
  }, [id]);

  return (
    <div className={css.page}>
      <Link to={backLinkHref} className={css.goBack}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="black"
          />
        </svg>
        Go back
      </Link>

      <div>
        <img src={character?.image} alt="Character" className={css.image} />
        <h1 className={css.name}>{character?.name}</h1>

        <h3 className={css.informations}>Informations</h3>

        <div className={css.block}>
          <p className={css.attribute}>Gender</p>
          <p className={css.value}>{character?.gender}</p>
        </div>

        <div className={css.block}>
          <p className={css.attribute}>Status</p>
          <p className={css.value}>{character?.status}</p>
        </div>

        <div className={css.block}>
          <p className={css.attribute}>Specie</p>
          <p className={css.value}>{character?.species}</p>
        </div>

        <div className={css.block}>
          <p className={css.attribute}>Origin</p>
          <p className={css.value}>{character?.origin?.name}</p>
        </div>

        <div className={css.block}>
          <p className={css.attribute}>Type</p>
          <p className={css.value}>{character?.type || ' Unknown'} </p>
        </div>
      </div>
    </div>
  );
}
