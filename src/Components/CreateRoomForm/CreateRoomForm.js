// Libraries
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';

// API
import { registerNewRoom } from '../../api/api';

// Local utility functions, reducers, state, etc...
import { initialFormState, validateFormInput, createRoomObject } from './localware';

// Components
import InputText from '../Inputs/InputText';

export default function CreateRoomForm({ cancel }) {
   const [formState, setFormState] = useState(initialFormState);
   const modal = useRef(null);

   function onChangeFormState(e) {
      const { id, value } = e.target;
      let key = id.split('-')[2];

      setFormState({ ...formState, [key]: value });
   };

   useEffect(() => {
      gsap.from(modal.current, {
         duration: .2,
         autoAlpha: 0,
      });
   }, []);

   function onSubmitForm(e) {
      e.preventDefault();

      const errors = validateFormInput(formState);
      if (errors) return setFormState({ ...formState, errors });

      registerNewRoom(createRoomObject(formState))
         .then(response => {
            // Redirect to roomId
            console.log(response);
         })
         .catch(error => {
            console.error(error);
         });
   };

   return createPortal(
      <div
         className="CreateRoomForm__modal"
         ref={modal}
         onClick={cancel}>
         <form
            onClick={e => e.stopPropagation()}
            onSubmit={onSubmitForm}
            className="CreateRoomForm">
            <h1 className="CreateRoomForm__title">Create Room</h1>
            <InputText
               id='create-room-title'
               label='title'
               placeholder='room title'
               required={true}
               value={formState.title}
               error={formState.errors.title}
               onChange={onChangeFormState} />
            <InputText
               type='password'
               id='create-room-adminPassword'
               label='admin password'
               placeholder='admin password'
               required={true}
               value={formState.adminPassword}
               error={formState.errors.adminPassword}
               onChange={onChangeFormState} />
            <InputText
               type='password'
               id='create-room-password'
               label='password'
               placeholder='room password'
               error={formState.errors.password}
               value={formState.password}
               onChange={onChangeFormState} />
            <InputText
               id='create-room-motd'
               label='message of the day'
               placeholder='room message of the day'
               error={formState.errors.motd}
               value={formState.motd}
               onChange={onChangeFormState} />
            <div className="CreateRoomForm__buttons">
               <button
                  className='button button--filled'
                  type='submit'>
                  SUBMIT
            </button>
               <button
                  className="button button--text"
                  type='button'
                  onClick={cancel}>
                  CANCEL
            </button>
            </div>
         </form>
      </div>,
      document.getElementById('root')
   );
};
