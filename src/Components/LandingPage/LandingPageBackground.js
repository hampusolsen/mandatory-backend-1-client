import React, { useRef, useEffect, useState } from 'react';
import drawBackground from '../../animation/landing-page-background';
import { useDebounce } from '../../libs/hooks';

export default function () {
   const canvas = useRef(null);
   const [dimensions, setDimensions] = useState({ w: window.innerWidth, h: window.innerHeight });
   const debouncedDimensions = useDebounce(dimensions, 100);

   useEffect(() => {
      canvas.current.width = debouncedDimensions.w;
      canvas.current.height = debouncedDimensions.h;
      drawBackground(canvas.current);

      function set() {
         setDimensions({ w: window.innerWidth, h: window.innerHeight });
      };

      window.addEventListener('resize', set);
      return () => window.removeEventListener('resize', set);
   }, [debouncedDimensions]);

   return (
      <canvas ref={canvas} className='LandingPageBackground' />
   );
};
