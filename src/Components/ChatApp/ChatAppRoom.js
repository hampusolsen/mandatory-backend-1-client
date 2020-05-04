import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setCurrentRoom } from '../../state/actions';
import { retrieveRoomData } from '../../api/api';
import RoomPassword from '../Room/RoomPassword';

export default function ChatAppRoom() {
   const Dispatch = useDispatch();
   const location = useLocation();
   const [room, setRoom] = useState({});
   const [showInput, setShowInput] = useState(false);

   const get = useCallback((password) => {
      const roomId = location.pathname.split('/').slice(-1)[0];

      retrieveRoomData(roomId, password)
         .then(room => {
            setRoom(room);
            Dispatch(setCurrentRoom({ title: room.title, id: room.id }));
            setShowInput(false);
         })
         .catch(error => {
            if (error.message.includes('403')) {
               setShowInput(true);
            };
         });
   }, [Dispatch, location.pathname]);

   useEffect(() => {
      if (location.private) setShowInput(true);
      else get();
   }, [location, get]);

   console.log(room);

   return (
      <React.Fragment>
         {showInput && <RoomPassword onSubmit={(password) => get(password)} />}
         <main className='ChatAppRoom'>

         </main>
      </React.Fragment>
   );
};
