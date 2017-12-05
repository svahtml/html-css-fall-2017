import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    }
  }
  slidePhoto(dir) {
    const { currentItem } = this.state;
    const { photos } = this.props;
    const nextItem = dir === 'left'
      ? this.slideLeft(currentItem, photos)
      : this.slideRight(currentItem, photos);
    this.updatePhotoDisplay(nextItem);
    this.setState({ currentItem: nextItem });
  }
  updatePhotoDisplay(offSet) {
    const width = 1000;
    this.photoBox.style.marginLeft = `-${width * offSet}px`;
  }
  slideLeft(currentItem, photos) {
    return currentItem < photos.length - 1 ? currentItem + 1 : 0;
  }
  slideRight(currentItem, photos) {
    return currentItem > 0 ? currentItem -1 : photos.length -1;
  }
  render() {
    return (
      <div className="Gallery">
        <div className="Gallery__items" ref={div => this.photoBox = div}>
          {this.props.photos.map((photo, i) => (
            <div key={photo.id} className="Gallery__item">
              <img src={photo.url} alt="" className="Gallery__image" />
              <p className="Gallery__caption">{photo.title}</p>
            </div>
          ))}
        </div>
        <button onClick={() => this.slidePhoto('right')}>pre</button>
        <button onClick={() => this.slidePhoto('left')}>next</button>
      </div>
    );
  }
}

export default Gallery;
