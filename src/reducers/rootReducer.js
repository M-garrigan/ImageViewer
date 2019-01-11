import { combineReducers } from 'redux';
import imageReducer from './imageReducer.js';
import navReducer from './navReducer.js';
import paginationReducer from './paginationReducer.js';
import thumbnailReducer from './thumbnailReducer.js';

const rootReducer = combineReducers({
  images: imageReducer,
  nav: navReducer,
  pagination: paginationReducer,
  thumb: thumbnailReducer
});

export default rootReducer;