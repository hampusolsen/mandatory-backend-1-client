import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgs/logo_sloth-hanging.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ChatAppHeader() {
   const { id } = useSelector(state => state.room);

   return (
      <header className="ChatAppHeader">
         <Logo className="ChatAppHeader__logo" />
         <Link to={`/app/rooms/${id}`} className="ChatAppHeader__title">sloth</Link>
      </header>
   );
};
