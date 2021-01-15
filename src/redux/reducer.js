import { CAMPSITES } from '../shared/campsites';
import { GALLERY } from '../shared/gallery';


export const initialState = {
    campsites: CAMPSITES,
    gallery: GALLERY,

};

export const Reducer = (state = initialState, action) => {
    return state;
};