import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgs/logo_sloth-hanging.svg';

export default function () {
   return (
      <header className="LandingPageHeader">
         <Logo className='LandingPageHeader__logo' />
         <span className="LandingPageHeader__title">sloth</span>
      </header>
   );
};
