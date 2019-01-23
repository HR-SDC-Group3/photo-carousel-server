import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-resizer';

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    const { onClose, modalImage, photos, currentModalIndex, onNext, onPrevious } = this.props;

    return ReactDOM.createPortal(
      <div id="carousel-modal-bg">
        <div id="carousel-modal-style">
          {photos.map((restaurants) => {
            const currentModal = restaurants.phototags.filter((restaurant, idx) => { return idx === currentModalIndex });
            const parsedDate = currentModal[0].date.split(' ').slice(0, 4).join(' ');
            return (
              <div>
                <div id="carousel-modal"><img src={currentModal[0].photoURL}></img></div>
                <div id="carousel-description">{currentModal[0].photo_type}</div>
                <div id="carousel-date">{parsedDate}</div>
                <div className="photo-description">
                  <button onClick={onClose} id="close-btn">Close</button>
                  <div onClick={onPrevious} className="fas fa-angle-left" id="prev-btn"></div>
                  <div onClick={onNext} className="fas fa-angle-right" id="next-btn"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div >,
      this.el
    )
  }
}

export default Modal;