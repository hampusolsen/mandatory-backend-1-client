// Libraries
import React, { useState } from 'react';

// State Management
import { useSelector } from 'react-redux';

// Components
import CreateRoomForm from '../CreateRoomForm/CreateRoomForm';

export default function ChatAppMenu() {
   const rooms = useSelector(state => state.user.rooms);
   const [displayCreateRoomForm, setDisplayCreateRoomForm] = useState(false);

   function toggleCreateRoomForm() {
      setDisplayCreateRoomForm(!displayCreateRoomForm);
   };

   return (
      <React.Fragment>
         <aside className="ChatAppMenu">
            <button
               className="ChatAppMenu__toggle-create-room-button"
               onClick={toggleCreateRoomForm}>
               <div className="plus-sign" />
               <span>Create Room</span>
            </button>
         </aside>
         {displayCreateRoomForm && <CreateRoomForm cancel={toggleCreateRoomForm} />}
      </React.Fragment>
   );
};
