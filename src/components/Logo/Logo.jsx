import React from 'react';
import logoComp1 from '../../images/desktop-1x.png';
import logoComp2 from '../../images/desktop-2x.png';
import logoMob1 from '../../images/mobile-1x.png';
import logoMob2 from '../../images/mobile-2x.png';

import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.logo}>
      <picture>
        <source
          srcSet={`${logoComp1} 1x, ${logoComp2} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${logoMob1} 1x, ${logoMob2} 2x`}
          media="(max-width: 767px)"
        />
        <img src={logoComp1} alt="logo" />
      </picture>
    </div>
  );
}
