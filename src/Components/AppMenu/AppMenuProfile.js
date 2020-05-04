import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AppMenuProfile() {
   const { room, user } = useSelector(state => ({ room: state.room, user: state.user }));

   return (
      <Link to='/app/profile' className="AppMenuProfile">
         <div className="AppMenuProfile__info">
            <span className="AppMenuProfile__room">{room.title || 'Dude, get a room'}</span>
            <span className="AppMenuProfile__name">{user.name}</span>
         </div>
         <div className="AppMenuProfile__pic">
            {
               user.pic === 'default'
                  ? <div className="AppMenuProfile__defaultPic" />
                  : null
            }
         </div>
      </Link>
   );
};
