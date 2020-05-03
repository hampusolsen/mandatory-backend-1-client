import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, registerNewUser } from '../../api/api';
import { setCurrentProfile } from '../../state/actions';
import {
   reducer,
   initialFormState,
   validateFormState,
   setError,
   getPasswordFillColor,
   setFormData,
   setRedirectPath
} from './localware';

export default function ({ type }) {
   const [formState, dispatch] = useReducer(reducer, initialFormState)
   const Dispatch = useDispatch();

   function onSubmitForm(e) {
      e.preventDefault();

      const validationResult = validateFormState(formState);
      if (validationResult || formState.password.length < 7) {
         return dispatch(setError(validationResult))
      };

      switch (type) {
         case 'login': {
            const userCredentials = {
               email: formState.email,
               password: formState.password,
            };

            loginUser(userCredentials)
               .then(({ refreshToken, user }) => {
                  Dispatch(setCurrentProfile({ refreshToken, user }));
                  dispatch(setRedirectPath(`/rooms/${user.rooms[0].id || 'no-subscriptions'}`));
               })
               .catch(error => {
                  console.error(error);
               });
         }
            break;
         case 'register': {
            const userCredentials = {
               name: formState.username,
               email: formState.email,
               password: formState.password
            };

            registerNewUser(userCredentials)
               .then(({ refreshToken, user }) => {
                  Dispatch(setCurrentProfile({ refreshToken, user }));
                  dispatch(setRedirectPath(`/rooms/${user.rooms[0].id || 'no-subscriptions'}`));
               })
               .catch(error => {
                  console.error(error);
               });
         }
            break;
         default:
            return;
      };
   };

   function onChangeForm(e) {
      dispatch(setFormData({ [e.target.id]: e.target.value }));
   };

   return (
      <React.Fragment>
         {formState.redirectPath && <Redirect to={formState.redirectPath} />}
         <form onSubmit={onSubmitForm} className="LandingPageAuthForm">
            {
               type === 'login'
                  ? <h1 className="LandingPageAuthForm__title">
                     Login and <span>hang</span>
                  </h1>
                  : <h1 className="LandingPageAuthForm__title">
                     Register and <span>chill</span>
                  </h1>
            }
            {
               type === 'register' &&
               <div className="LandingPageAuthForm__input">
                  <input
                     type="text"
                     id="username"
                     autoComplete='off'
                     placeholder='placeholder'
                     onChange={onChangeForm} />
                  <label htmlFor="username">USERNAME</label>
                  {
                     formState.error.username &&
                     <span className="LandingPageAuthForm__error-message">
                        {formState.error.username}
                     </span>
                  }
               </div>
            }
            <div className="LandingPageAuthForm__input">
               <input
                  type="text"
                  id="email"
                  autoComplete='off'
                  placeholder='placeholder'
                  onChange={onChangeForm} />
               <label htmlFor="email">E-MAIL</label>
               {
                  formState.error.email &&
                  <span className="LandingPageAuthForm__error-message">
                     {formState.error.email}
                  </span>
               }
            </div>
            <div className="LandingPageAuthForm__input">
               <input
                  type="password"
                  id="password"
                  min={7}
                  autoComplete='off'
                  placeholder='placeholder'
                  onChange={onChangeForm} />
               <label htmlFor="password">PASSWORD</label>
               {
                  type === 'register' &&
                  <div className="LandingPageAuthForm__password">
                     <div
                        style={{
                           width: `${(formState.passwordStrength[0] * .2) * 276}px`,
                           backgroundColor: getPasswordFillColor(formState.passwordStrength[0]),
                        }}
                        className="LandingPageAuthForm__password--meter">
                     </div>
                     <span className="LandingPageAuthForm__password--status">
                        {formState.passwordStrength[1]}
                     </span>
                  </div>
               }
            </div>
            <button
               className="button button--filled"
               style={type === 'login' ? { marginTop: '22px' } : null}
               type='submit'>
               SUBMIT
            </button>
         </form>
      </React.Fragment>
   );
};