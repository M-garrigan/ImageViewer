import { connect } from 'react-redux';
import Pagination from '../components/Pagination.js';
import { 
  handleLeftChevron, 
  handleRightChevron,
  handlePaginationSquare 
} from '../actions/paginationAction';

const mapStateToProps = state => {
  return {
    leftmostPaginationSquare: state.pagination.leftmostPaginationSquare,
    paginationArray: state.pagination.paginationArray,
    pagCopyOfImages: [...state.images.images],
    pagCopyOfLimit: state.nav.displayLimit,
    currentImagesToDisplay: state.images.images.slice(0, state.nav.displayLimit),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLeftChevron: () => {
      dispatch(handleLeftChevron());
    },
    handleRightChevron: () => {
      dispatch(handleRightChevron()); 
    },
    handlePaginationSquare: num => {
      dispatch(handlePaginationSquare());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);