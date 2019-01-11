import { connect } from 'react-redux';
import { fetchImages, handleMagnifyDown } from '../actions/bodyAction.js';
import Body from '../components/Body.js';

const mapStateToProps = state => {
  return {
    images: state.images.images,
    imageLength: state.images.images.length,
    currentImagesToDisplay: state.images.images.slice(0, state.nav.displayLimit),
    isElemMagnified: state.thumb.isElemMagnified,
    elementMagnified: state.thumb.elementMagnified,
    favoritesArrayOfImages: state.nav.favoritesArrayOfImages,
    isFavoritesButtonSelected: state.nav.isFavoritesButtonSelected
  };
};

// this api does not have an ability to be limited so the result is 5000 objects
const mapDispatchToProps = dispatch => {
  return {
    fetchImages: () => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => { dispatch(fetchImages(json)) });
    },
    handleMagnifyDown: () => {
      dispatch(handleMagnifyDown());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);