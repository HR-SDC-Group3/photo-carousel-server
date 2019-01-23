import React from 'react';
import Masonry from 'react-masonry-component';
import Image from 'react-image-resizer';

const masonryOptions = {
  horizontalOrder: false,
}

class Mosaic extends React.Component {
  render() {
    const { photoArray, onClick } = this.props;

    const images = photoArray.map(photos => {
      const photosToBeDisplayed = photos.phototags.slice(0, 10);
      return photosToBeDisplayed.map((photo, index) => {
        return (
          <li id="carousel-tile" key={index}>
            <Image src={photo.photoURL} width={160} height={160} key={index} data-id={index} onClick={onClick}/>
          </li>
        )
      });
    });

    return (
      <Masonry options={masonryOptions}>
        {images}
      </ Masonry>
    )
  }
}

export default Mosaic;