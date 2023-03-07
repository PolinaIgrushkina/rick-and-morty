import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './ChacartersItem.module.css';

export default function ChacartersItem({ image, name, id, species }) {
  return (
    <li>
      <Link
        to={`/characters/${id}`}
        //state={{ from: location }}
      >
        <div className={css.item}>
          <img src={image} alt="Character" className={css.image} />
          <div className={css.description}>
            <p className={css.name}>{name.slice(0, 17)}</p>
            <p className={css.species}>{species}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

ChacartersItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired,
};
