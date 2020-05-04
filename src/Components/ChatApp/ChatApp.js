// Libraries
import React, { useEffect, useState } from 'react';

// Routing
import { Switch, Route, Redirect } from 'react-router-dom';

// State Management
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProfile } from '../../state/actions';

// Components
import ChatAppHeader from './ChatAppHeader';
import AppMenu from '../AppMenu/AppMenu';
import ChatAppRoom from './ChatAppRoom';
import ChatAppRoomMissing from './ChatAppRoomMissing';
import ChatAppProfile from './ChatAppProfile';

export default function ChatApp() {
   const [auth, setAuth] = useState(true);
   const Dispatch = useDispatch();
   const name = useSelector(state => state.user.name);

   useEffect(() => {
      if (!name) {
         const user = JSON.parse(window.localStorage.getItem('user'));
         if (user) {
            Dispatch(setCurrentProfile({ refreshToken: null, user }));
            return;
         };

         setAuth(false);
      };
   }, [name, Dispatch]);

   return (
      <React.Fragment>
         {!auth && <Redirect to='/' />}
         <div className="ChatApp">
            <ChatAppHeader />
            <AppMenu />
            <Switch>
               <Route path='/app/rooms/no-subscriptions' component={ChatAppRoomMissing} />
               <Route path='/app/rooms/:roomId' component={ChatAppRoom} />
               <Route path='/app/profile/' component={ChatAppProfile} />
            </Switch>
         </div>
      </React.Fragment>
   );
};