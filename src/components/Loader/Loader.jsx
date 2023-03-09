import { Circles } from 'react-loader-spinner';
import React from 'react';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
