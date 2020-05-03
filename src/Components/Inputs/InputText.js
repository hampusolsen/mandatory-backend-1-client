import React from 'react';

export default function InputText({
   id,
   label,
   placeholder = 'placeholder',
   error = false,
   required = false,
   type = 'text',
   onChange,
   value }) {
   return (
      <div className="input-text">
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            autoComplete='off' />
         <label htmlFor={id}>{label}</label>
         {error && <span className='input-text__error'>{error}</span>}
         {required && <span className='input-text__required'>Required</span>}
      </div>
   );
};
