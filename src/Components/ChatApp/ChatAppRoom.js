import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setCurrentRoom } from '../../state/actions';
import { retrieveRoomData } from '../../api/api';

export default function ChatAppRoom() {
   const Dispatch = useDispatch();
   const { roomId } = useParams();

   useEffect(() => {
      retrieveRoomData(roomId)
         .then(roomData => {
            console.log(roomData);
            Dispatch(setCurrentRoom(roomData));
         })
         .catch(error => {
            console.error(error);
         });
   }, [roomId, Dispatch]);

   return (
      <main>

      </main>
   );
};
