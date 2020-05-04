/**
 * action types
 */

export const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
export const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';
export const ADD_ROOM = 'ADD_ROOM';

/**
 * action creators
 */

export function setCurrentProfile({ refreshToken, user }) {
   return { type: SET_CURRENT_PROFILE, payload: { refreshToken, user } };
};

export function setCurrentRoom(room) {
   return { type: SET_CURRENT_ROOM, payload: room };
};

export function addRoom(room) {
   return { type: ADD_ROOM, payload: room };
};