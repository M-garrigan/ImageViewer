const defaultState = {
  images: []
};

const imageReducer = (state = defaultState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'FETCH_IMAGES':
      newState.images = action.images; 
      break;

    case 'HANDLE_MAGNIFY_DOWN':
      newState.isElemMagnified = !newState.isElemMagnified;
      break;
        
    default: 
      return newState;
  }
  return newState;
};

export default imageReducer;