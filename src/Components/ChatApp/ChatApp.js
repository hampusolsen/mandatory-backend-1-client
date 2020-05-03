// Libraries
import React from 'react';

// Routing
import { Switch, Route } from 'react-router-dom';

// Components
import ChatAppHeader from './ChatAppHeader';
import ChatAppMenu from './ChatAppMenu';
import ChatAppRoom from './ChatAppRoom';
import ChatAppRoomMissing from './ChatAppRoomMissing';

export default function ChatApp() {
   return (
      <div className="ChatApp">
         <ChatAppHeader />
         <ChatAppMenu />
         <Switch>
            <Route path='/rooms/no-subscriptions' component={ChatAppRoomMissing} />
            <Route path='/rooms/:roomId' component={ChatAppRoom} />
         </Switch>
      </div>
   );
};