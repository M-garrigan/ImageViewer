
// the initial api call to retrieve all the images
export const fetchImages = images => {
  return {
    type: 'FETCH_IMAGES',
    images: images
  }
};

// a toogle to close the view after someone is looking at 
// an enlarged image
export const handleMagnifyDown = () => {
  return {
    type: 'HANDLE_MAGNIFY_DOWN'
  }
};

