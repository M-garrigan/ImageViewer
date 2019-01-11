import React, { Component } from 'react';
import Thumbnail from '../containers/thumbnailContainer.js';
import './Body.css';

export default class Body extends Component {

  componentDidMount() {
    if(this.props.images.length === 0) {
      this.props.fetchImages();
    }
    
  }
  render() {
    // the elements from the bulk of images that we will actually display
    let { currentImagesToDisplay } = this.props;
  
    return (
      <main>
        { // conditional for viewing the favorites chosen
          this.props.isFavoritesButtonSelected 
            ? (
              
                this.props.favoritesArrayOfImages.map( item => {
                  return (
                    
                    <div className="favorites-wrapper">
                      <div className="favorites-border">
                        <img 
                          className="favorites-image"
                          src={item.thumbnailUrl}
                          alt={item.title}
                          key={item.title}
                        />
                      </div>
                      <div className="favorites-bottom"></div>
                    </div>
                  )
                })
            ) : ''
          
        }
        { // conditional for viewing the large picture 600 x 600
          this.props.isElemMagnified 
            ? (
              <div className="large-wrapper">
                <div className="large-border">
                  <img 
                    className="large-image"
                    src={this.props.elementMagnified}
                    alt={'pic'}
                  />
                </div>
              <div className="large-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="svgSearch-lg"
                  viewBox="0 -10 100 100"
                  onClick={ () => {this.props.handleMagnifyDown()}}
                  >
                  <g>
                    <path
                      id="lg-circle-lg-img" // magnifing glass svg
                      d="m 34.159125,35.272548 c 2.145838,1.921051 2.727823,4.746183 1.304902,6.334373 L 9.0636648,71.073608 C 7.6407465,72.661796 4.7677046,72.393818 2.621861,70.472772 0.47601738,68.551726 -0.10596065,65.726587 1.3169582,64.1384 L 27.717321,34.671712 c 1.422921,-1.58819 4.295966,-1.320217 6.441804,0.600836 z M 61.275516,34.315751 A 20.416978,20.416978 0 0 1 32.452632,36.032513 20.416978,20.416978 0 0 1 30.735873,7.2096267 20.416978,20.416978 0 0 1 59.558759,5.4928678 20.416978,20.416978 0 0 1 61.275516,34.315751 Z"
                    />
                  <path
                    id="search-sm-circle-lg-img"
                    d="M 45.33757,3.0494287 A 17.864857,17.864857 0 0 0 32.77813,9.037177 17.864857,17.864857 0 0 0 34.280363,34.257342 17.864857,17.864857 0 0 0 59.500528,32.755109 17.864857,17.864857 0 0 0 57.998295,7.5354597 17.864857,17.864857 0 0 0 45.33757,3.0494287 Z m -0.239778,8.0894283 h 2.083075 c 0.68426,0 1.235067,1.976614 1.235067,4.432288 V 18.5968 l 3.025656,-0.02946 c 2.455561,-0.02401 4.437689,0.507442 4.44469,1.191658 l 0.02067,2.083594 c 0.0067,0.684215 -1.965359,1.254465 -4.420917,1.278475 l -3.070098,0.02997 v 3.070614 c 0,2.455672 -0.550815,4.432286 -1.235067,4.432286 h -2.083075 c -0.68425,0 -1.235067,-1.976614 -1.235067,-4.432286 v -3.026172 l -3.025656,0.02946 c -2.455561,0.02401 -4.43769,-0.507443 -4.444691,-1.191658 l -0.02067,-2.083594 c -0.0067,-0.684215 1.96536,-1.253948 4.420918,-1.277958 l 3.070098,-0.02997 v -3.070614 c 0,-2.455674 0.550817,-4.432288 1.235067,-4.432288 z"
                    />
                  </g>
                </svg>
                <svg // heart svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="svgHeart1-lg"
                  viewBox="-6 -10 110 110"
                >
                  <path
                  d="M 26.728784,0.32918392 C 9.5619095,-0.3229635 -4.2410486,18.433926 1.4395087,34.626114 2.9576246,39.532335 5.9265898,43.99925 9.9225507,47.233636 17.503875,54.8958 40.780675,76.964842 50.804942,86.452481 c 1.666872,1.397621 2.682728,-1.747119 4.002721,-2.532715 L 89.946675,47.087055 C 103.53806,36.544662 102.0524,13.263887 87.241796,4.5258907 75.052322,-3.8002726 56.635779,0.83195557 49.821304,13.920849 45.309601,5.6506434 36.148931,0.25964728 26.728784,0.32918392 Z" />
                </svg>

            </div>
          </div>
            )
            : ''
        }
        <div id='thumbnail-wrapper'>
          { // the bulk small images layed out with flex
            currentImagesToDisplay.length > 0 
              ? currentImagesToDisplay.map( (item, idx) => {
               
                return (
                  <Thumbnail 
                    id={item.thumbnailUrl}
                    key={item.title + idx}
                    elemID={item.id}
                    element={item}
                    largeURL={item.url} 
                    url={item.thumbnailUrl} 
                    title={item.title} 
                    onMouseEnter={ () => {this.props.handleThumbnailMouseEnter(item.thumbnailUrl)}}
                    onMouseLeave={ () => {this.props.handleThumbnailMouseLeave(item.thumbnailUrl)}}
                  />
                )
              })
              : ''
          }
        </div>
      </main>
    )
  }
}
