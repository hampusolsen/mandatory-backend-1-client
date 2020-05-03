import { SET_CURRENT_PROFILE, SET_CURRENT_ROOM } from './actions';
import initialState from './state';

function reducer(state = initialState, { type, payload }) {
   switch (type) {
      case SET_CURRENT_PROFILE:
         const { refreshToken, user } = payload;
         return { ...state, user, refreshToken };

      case SET_CURRENT_ROOM:
         const room = payload;

         return { ...state, room };
      default:
         return state;
   };
};

export default reducer;