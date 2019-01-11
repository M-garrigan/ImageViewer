import { connect } from 'react-redux';
import Thumbnail from '../components/Thumbnail.js';
import { 
  handleMagnifyUp,
  handleThumbnailMouseEnter,
  handleThumbnailMouseLeave,
  addImageToFavoritesArray,
  handleFavoriteSelected 
} from '../actions/thumbnailAction';

const mapStateToProps = state => {
  return {
    elementMagnified: state.thumb.elementMagnified,
    isElemMagnified: state.thumb.isElemMagnified,
    favoritesCount: state.thumb.favoritesCount,
    favoritesArray: state.thumb.favoritesArray,
    favoritesCounter: state.nav.favoritesCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleMagnifyUp: event => {
      dispatch(handleMagnifyUp(event));
    },
    handleFavoriteSelected: element => {
      dispatch(handleFavoriteSelected(element));
    }
    
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbnail);