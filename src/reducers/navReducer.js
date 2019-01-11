
const defaultState = {
  displayLimit: 10,
  favoritesCounter: 0,
  favoritesArrayOfImages: [],
  isFavoritesButtonSelected: false
};

const navReducer = (state = defaultState, action) => {
  let newState = {...state};
  
  switch (action.type) {
    case 'UPDATE_DISPLAY_LIMIT':
      newState.displayLimit = action.limit;
      break;
      
    case 'INCREMENT_FAVORITES_COUNTER':
      newState.favoritesCounter += action.value;
      break;
      
    case 'HANDLE_FAVORITE_SELECTED':
      newState.favoritesArrayOfImages =  [...newState.favoritesArrayOfImages, action.element];
      newState.favoritesCounter += 1;
      break;

    case 'REMOVE_IMAGE_FROM_FAVORITES_ARRAY': 
      newState.favoritesArray = newState.favoritesArray.filter( (item,idx) => { 
          return idx !== action.index
        })
      break;

    case 'TOGGLE_FAVORITES_BUTTON_SELECTED':
      newState.isFavoritesButtonSelected =  !newState.isFavoritesButtonSelected;
      break;

    default: 
      return newState;
  }
  return newState;
};

export default navReducer;