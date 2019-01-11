import { connect } from 'react-redux';
import Nav from '../components/Nav.js';
import { 
  updateDisplayLimit,
  incrementFavoritesCounter,
  decrementFavoritesCounter,
  addImageToFavoritesArray,
  removeImageFromFavoritesArray,
  toggleFavoritesButtonSelected 
} from '../actions/navAction';

const mapStateToProps = state => {
  return {
    displayLimit: state.nav.displayLimit,
    favoritesCounter: state.nav.favoritesCounter,
    favoritesArrayOfImages: state.nav.favoritesArrayOfImages,
    isFavoritesButtonSelected: state.nav.isFavoritesButtonSelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDisplayLimit: limit => {
      dispatch(updateDisplayLimit(limit))
    },
    incrementFavoritesCounter: () => {
      dispatch(incrementFavoritesCounter())
    },
    decrementFavoritesCounter: () => {
      dispatch(decrementFavoritesCounter())
    },
    addImageToFavoritesArray: image => {
      dispatch(addImageToFavoritesArray(image))
    },
    removeImageFromFavoritesArray: index => {
      dispatch(removeImageFromFavoritesArray(index))
    },
    toggleFavoritesButtonSelected: () => {
      dispatch(toggleFavoritesButtonSelected())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);