import React, { useState, useRef } from 'react';
import animateCover from '../../animation/landing-page-cover';
import LandingPageAuthForm from './LandingPageAuthForm';

export default function () {
   const [formType, setFormType] = useState(null);
   const cover = useRef(null);

   function bringForm(type) {
      animateCover(cover.current, () => {
         setFormType(type);
      });
   };

   return (
      <main className="LandingPageLoginCard">
         <div className="LandingPageLoginCard__inner">
            <h1 className="LandingPageLoginCard__title">Welcome to <span>Sloth</span></h1>
            <p className="LandingPageLoginCard__information">
               Where the real slackers chat, unlike those <span>busybodies</span> over at Slack!
            </p>
            <label className='LandingPageLoginCard__label'>Old timer?<br />
               <button
                  className='button button--filled'
                  onClick={() => bringForm('login')}>
                  LOGIN
                  </button>
            </label>
            <label className='LandingPageLoginCard__label'>New in town?<br />
               <button
                  className='button button--outlined'
                  onClick={() => bringForm('register')}>
                  SIGN UP
                  </button>
            </label>
         </div>
         <div
            className="LandingPageLoginCard__inner"
            style={formType === 'register' ? { paddingTop: '52px' } : null}>
            {formType && <LandingPageAuthForm type={formType} />}
         </div>
         <div ref={cover} className="LandingPageLoginCard__cover">
            <p className="LandingPageLoginCard__description">Here we be chillin' 'n' hangin'.</p>
         </div>
      </main>
   );
};
