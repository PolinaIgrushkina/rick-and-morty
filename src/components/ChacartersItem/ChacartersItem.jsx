import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from './ChacartersItem.module.css';

export default function ChacartersItem({ image, name, id, species }) {
  const location = useLocation();
  return (
    <li>
      <Link to={`/characters/${id}`} state={{ from: location }}>
        <div className={css.item}>
          <img src={image} alt="Character" className={css.image} />
          <div className={css.description}>
            <h3 className={css.name}>{name.slice(0, 17)}</h3>
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
