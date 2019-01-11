import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>Image Viewer</h1>
        <button 
          id='favorites-button'
          onClick={this.props.toggleFavoritesButtonSelected}
        >
          Favorites
          <div id='favorites-counter'>
            {this.props.favoritesCounter}
          </div>
        </button>
        
        <div id='pagination-limit-wrapper'>
          <h3>Display Limit</h3>
          <div id='pag-button-group-wrapper'>
            <button 
              id='pag-limit-10'
              onClick={() => this.props.updateDisplayLimit(10)}>10
            </button>
            <button 
              id='pag-limit-25' 
              onClick={() => this.props.updateDisplayLimit(25)}>
              25
            </button>
            <button 
              id='pag-limit-50'
              onClick={() => this.props.updateDisplayLimit(50)}
            >
              50
            </button>
          </div>
        </div>
      </nav>
    )
  }
}
