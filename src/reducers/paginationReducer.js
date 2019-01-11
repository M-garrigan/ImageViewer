
// the paginationArray has a structure like this: 
// [ {startRange: 1, endRange: 10, position: 2}, {startRange: 1, endRange: 10, position: 2}]

const defaultState = {
  leftmostPaginationSquare: 1,
  paginationArray: [],
  pagCopyOfImages: [],
  pagCopyOfLimit: 10,
  currentImagesToDisplay: []
};

const paginationReducer = (state = defaultState, action) => {
  let newState = {...state};
  
  switch (action.type) {
    case 'HANDLE_LEFT_CHEVRON':
      if (newState.leftmostPaginationSquare > 1) {
        newState.leftmostPaginationSquare -= 1;
      }
      break;
      
    case 'HANDLE_RIGHT_CHEVRON':
      if (newState.leftmostPaginationSquare < newState.paginationArray.length) {
        newState.leftmostPaginationSquare += 1;

        // set the new items to display by looking at the left most pagination square
        let start = state.paginationArray[newState.leftmostPaginationSquare].rangeStart;
        let end = state.paginationArray[newState.leftmostPaginationSquare].rangeEnd;
        newState.currentImagesToDisplay = [...state.paginationArray.slice(start, end)];
      }
      break;
      
    case 'FETCH_IMAGES':
      newState.pagCopyOfImages = [...action.images];
    
      let container = [];
      
      for (
        let i = 0, j = 1; 
        i < newState.pagCopyOfImages.length; 
        i += newState.pagCopyOfLimit, j += 1) {
          if (i + newState.pagCopyOfLimit >= newState.pagCopyOfImages.length) {
            container.push({
              rangeStart: i, rangeEnd: newState.pagCopyOfImages.length - 1, position: j
            })
          } else {
            container.push({
              rangeStart: i, rangeEnd: (i + newState.pagCopyOfLimit) - 1, position: j
            });
          }
        
      }
      newState.paginationArray = container;
      break;
      
    case 'HANDLE_PAGINATION_SQUARE':
      for (let i = 0; i < newState.paginationArray.length; i += 1) {
        if (action.num === newState.paginationArray[i].rangeStart) {
          newState.leftmostPaginationSquare = i + 1;
        }
      }

      break;
  
    default: 
      return newState;
  }
  return newState;
};

export default paginationReducer;