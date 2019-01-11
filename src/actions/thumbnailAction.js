
// the thumbnail to enlarge the image and render the body component
// based on it being open or closed
export const handleMagnifyUp = url => {
  console.log(url)
  return {
    type: 'HANDLE_MAGNIFY_UP',
    url: url
  }
};

// gold shadows behind the thumbnail being hovered over
export const handleThumbnailMouseEnter = id => {
  console.log(id)
  return {
    type: 'THUMBNAIL_MOUSE_ENTER',
    id: id
  }
};

export const handleThumbnailMouseLeave = id => {
  return {
    type: 'THUMBNAIL_MOUSE_LEAVE',
    id: id
  }
};


// the heart on the thumbnail image is controlled here
export const handleFavoriteSelected = element => {
  return {
    type: 'HANDLE_FAVORITE_SELECTED',
    element: element
  }
};
