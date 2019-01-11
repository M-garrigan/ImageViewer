
// display limit
// 10, 25, 50 -- default will be 10 and that button should be highlighted
export const updateDisplayLimit = limit => {
  return {
    type: 'UPDATE_DISPLAY_LIMIT',
    limit: limit
  }
};

// a favorites counter on the button in the nav bar
export const incrementFavoritesCounter = () => {
  return {
    type: 'INCREMENT_FAVORITES_COUNTER',
    value: 1
  }
};
export const decrementFavoritesCounter = () => {
  return {
    type: 'DECREMENT_FAVORITES_COUNTER',
    value: 1
  }
};

// an array of images in the favorites group
export const addImageToFavoritesArray = image => {
  return {
    type: 'ADD_IMAGE_TO_FAVORITES_ARRAY',
    image: image
  }
};
export const removeImageFromFavoritesArray = index => {
  return {
    type: 'REMOVE_IMAGE_FROM_FAVORITES_ARRAY',
    index: index
  }
};

// boolean indicating if the button is pressed
export const toggleFavoritesButtonSelected = () => {
  return {
    type: 'TOGGLE_FAVORITES_BUTTON_SELECTED'
  }
};