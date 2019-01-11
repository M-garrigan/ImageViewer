
// chevron buttons
export const handleLeftChevron = () => {
  return {
    type: 'HANDLE_LEFT_CHEVRON'
  }
};
export const handleRightChevron = () => {
  return {
    type: 'HANDLE_RIGHT_CHEVRON'
  }
};

// all five of the interior pagination buttons are
// controlled by the same handler which uses the num 
// determine which square it is on
export const handlePaginationSquare = num => {
  return {
    type: 'HANDLE_PAGINATION_SQUARE',
    num: num
  }
};

