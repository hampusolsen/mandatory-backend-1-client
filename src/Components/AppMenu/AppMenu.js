import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CreateRoomForm from '../CreateRoomForm/CreateRoomForm';
import AppMenuProfile from './AppMenuProfile';
import { Link } from 'react-router-dom';

export default function AppMenu() {
   const rooms = useSelector(state => state.user.rooms);
   const [displayCreateRoomForm, setDisplayCreateRoomForm] = useState(false);

   function toggleCreateRoomForm() {
      setDisplayCreateRoomForm(!displayCreateRoomForm);
   };

   return (
      <React.Fragment>
         <aside className="AppMenu">
            <div className="AppMenu__divisor" />
            <AppMenuProfile />
            <div className="AppMenu__divisor" />
            <button
               className="AppMenu__create-room-button"
               onClick={toggleCreateRoomForm}>
               <span>Create Room</span>
               <div className="AppMenu__add-sign" />
            </button>
            <div className="AppMenu__room-list">
               {
                  rooms.map(room => (
                     <Link className='AppMenu__room-link' key={room.id} to={`/app/rooms/${room.id}`}>
                        {room.title}
                     </Link>
                  ))
               }
            </div>
            <div className="AppMenu__divisor" />
         </aside>
         {displayCreateRoomForm && <CreateRoomForm cancel={toggleCreateRoomForm} />}
      </React.Fragment>
   );
};
