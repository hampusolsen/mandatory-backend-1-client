import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgs/logo_sloth-hanging.svg';

export default function ChatAppHeader() {
   return (
      <header className="ChatAppHeader">
         <Logo className="ChatAppHeader__logo" />
         <span className="ChatAppHeader__title">sloth</span>
      </header>
   )
}
