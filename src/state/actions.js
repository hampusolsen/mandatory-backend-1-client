/**
 * action types
 */

export const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
export const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';

/**
 * action creators
 */

export function setCurrentProfile(profile) {
   return { type: SET_CURRENT_PROFILE, payload: profile };
};

export function setCurrentRoom(roomData) {
   return { type: SET_CURRENT_ROOM, payload: roomData };
};