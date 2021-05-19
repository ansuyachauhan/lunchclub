import { EVENTS } from '../shared/events';
import { GALLERY } from '../shared/gallery';


export const initialState = {
    events: EVENTS,
    gallery: GALLERY,

};

export const Reducer = (state = initialState, action) => {
    return state;
};