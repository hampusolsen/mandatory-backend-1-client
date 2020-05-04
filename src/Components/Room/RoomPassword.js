import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import InputText from '../Inputs/InputText';
import animate from '../../animation/create-room-form';

export default function RoomPassword({ onSubmit }) {
   const [password, setPassword] = useState('');
   const modal = useRef(null);

   useEffect(() => {
      animate(modal.current);
   }, []);

   return createPortal(
      <div ref={modal} className="RoomPassword__modal">
         <form
            onSubmit={e => {
               e.preventDefault();
               onSubmit(password);
            }}
            className='RoomPassword'>
            <InputText
               type='password'
               id='room-password'
               onChange={e => setPassword(e.target.value)}
               value={password}
               label='password' />
            <button className='button button--filled' type="submit">SUBMIT</button>
         </form>
      </div>,
      document.querySelector('.ChatAppRoom')
   );
};
