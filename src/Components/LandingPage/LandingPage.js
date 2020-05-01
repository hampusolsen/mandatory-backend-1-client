import React from 'react';
import LandingPageBackground from './LandingPageBackground';
import LandingPageHeader from './LandingPageHeader';
import LandingPageLoginCard from './LandingPageLoginCard';

export default function () {
   return (
      <div className="LandingPage">
         <LandingPageBackground />
         <LandingPageHeader />
         <LandingPageLoginCard />
      </div>
   );
};