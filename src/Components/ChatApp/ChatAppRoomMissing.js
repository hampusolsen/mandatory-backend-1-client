import React, { useRef, useEffect } from 'react';
import Sloth from '../../assets/images/sloth-no-subscriptions.png';
import drawBackground from '../../animation/no-subscriptions-background';

export default function ChatAppRoomMissing() {
   const canvas = useRef(null);
   const container = useRef(null);

   useEffect(() => {
      const { height, width } = container.current.getBoundingClientRect();
      canvas.current.width = width + 300;
      canvas.current.height = height + 300;

      drawBackground(canvas.current);
   }, []);

   return (
      <main ref={container} className='ChatAppRoom ChatAppRoom--missing'>
         <canvas ref={canvas}></canvas>
         <div className="ChatAppRoom__splash">
            <img src={Sloth} alt="Sloth hanging from a tree branch" />
            <span>Dude, get a room.</span>
         </div>
      </main>
   );
};
