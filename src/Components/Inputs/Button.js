import React from 'react'

export default function Button({
   type = 'button',
   onClick,
   text,
}) {
   return (
      <button
         type={type}
         onClick={onClick}>
         {text}
      </button>
   )
}
