// @elementMagnified is a holder for the url that is used to show the large image
// @isElemMagnified is the boolean that controlls whether someone is currently magnifing an image as conditionals in the Body component

const defaultState = {
  elementMagnified: '',
  isElemMagnified: false
};

export const thumbnailReducer = (state = defaultState, action) => {
  let newState = {...state};

  switch (action.type) {
    case 'HANDLE_MAGNIFY_UP':
      newState.elementMagnified = action.url;
      newState.isElemMagnified = true;
      break;

    case 'HANDLE_MAGNIFY_DOWN':
      newState.isElemMagnified = false;
      break;
      
    case 'THUMBNAIL_MOUSE_ENTER':
      newState.favoritesCounter += action.id;
      break;
  
    case 'THUMBNAIL_MOUSE_LEAVE':
      newState.favoritesCounter -= action.id;
      break;
      
    default: 
      return newState;
  }
  return newState;
};

export default thumbnailReducer;