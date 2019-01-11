import React, { Component } from 'react';
import './Pagination.css';

export default class Pagination extends Component {
  render() {
    const { paginationArray, leftmostPaginationSquare } = this.props;
    const left = leftmostPaginationSquare - 1;
    
    return (
      <div id='pagination-wrapper'>
        <div id='pagination-button-group'>
          <button 
            className='left-chevron pag-item'
            onClick={this.props.handleLeftChevron}
          >{'<'}</button>
          <button 
            className='pag-number pag-item'
            onClick={() => {this.props.handlePaginationSquare(paginationArray[0 + left].rangeStart)}}>
            {
              paginationArray.length !== 0
                ? `${paginationArray[0 + left].rangeStart}-${paginationArray[0 + left].rangeEnd}`
                : 1
            }
          </button>
          <button 
            className='pag-number pag-item'
            onClick={() => {this.props.handlePaginationSquare(paginationArray[1 + left].rangeStart)}}>
            {
              paginationArray.length !== 0
                ? `${paginationArray[1 + left].rangeStart}-${paginationArray[1 + left].rangeEnd}`
                : 2
            }
          </button>
          <button 
            className='pag-number pag-item'
            onClick={() => {this.props.handlePaginationSquare(paginationArray[2 + left].rangeStart)}}>
            {
              paginationArray.length !== 0
                ? `${paginationArray[2 + left].rangeStart}-${paginationArray[2 + left].rangeEnd}`
                : 3
            }
          </button>
          <button 
            className='pag-number pag-item'
            onClick={() => {this.props.handlePaginationSquare(paginationArray[3 + left].rangeStart)}}>
            {
              paginationArray.length !== 0
                ? `${paginationArray[3 + left].rangeStart}-${paginationArray[3 + left].rangeEnd}`
                : 4
            }
          </button>
          <button 
            className='pag-number pag-item'
            onClick={() => {this.props.handlePaginationSquare(paginationArray[4 + left].rangeStart)}}>
            {
              paginationArray.length !== 0
                ? `${paginationArray[4 + left].rangeStart}-${paginationArray[4 + left].rangeEnd}`
                : 5
            }
          </button>
          <button 
            className='right-chevron pag-item'
            onClick={this.props.handleRightChevron}
          >{'>'}</button>
        </div>
      </div>
    )
  }
};
