import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setCurrentRoom } from '../../state/actions';
import { retrieveRoomData } from '../../api/api';

export default function ChatAppRoom() {
   const Dispatch = useDispatch();
   const { roomId } = useParams();
   const [room, setRoom] = useState();

   useEffect(() => {
      retrieveRoomData(roomId)
         .then(room => {
            setRoom(room);
            Dispatch(setCurrentRoom({ title: room.title, id: room.id }));
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
