import { SET_CURRENT_PROFILE, SET_CURRENT_ROOM, ADD_ROOM } from './actions';
import initialState from './state';

function reducer(state = initialState, { type, payload }) {
   switch (type) {
      case ADD_ROOM: {
         const room = payload;
         const user = { ...state.user };

         user.rooms.push(room);
         user.owner.push(room);

         window.localStorage.setItem('user', JSON.stringify(user));
         return { ...state, user }
      }
      case SET_CURRENT_PROFILE:
         const { refreshToken, user } = payload;
         window.localStorage.setItem('user', JSON.stringify(user));
         return { ...state, user, refreshToken };

      case SET_CURRENT_ROOM:
         const room = payload;

         return { ...state, room };
      default:
         return state;
   };
};

export default reducer;