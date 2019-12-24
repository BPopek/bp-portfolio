import React, {Component} from 'react';
// import Waffler from '../images/UX/WebsiteUXWafflerThumb.png';
// import { NavLink } from 'react-router-dom'
// import WafflerFullPage from '../images/UX/WW-Portfolio.jpg';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

import WafflerPage1 from '../images/UX/WW-Portfolio_Website_Pages-01-sm.jpg';
import WafflerPage2 from '../images/UX/WW-Portfolio_Website_Pages-02-sm.jpg';
import WafflerPage3 from '../images/UX/WW-Portfolio_Website_Pages-03-sm.jpg';
import WafflerPage4 from '../images/UX/WW-Portfolio_Website_Pages-04-sm.jpg';
import WafflerPage5 from '../images/UX/WW-Portfolio_Website_Pages-05-sm.jpg';
import WafflerPage6 from '../images/UX/WW-Portfolio_Website_Pages-06-sm.jpg';
import WafflerPage7 from '../images/UX/WW-Portfolio_Website_Pages-07-sm.jpg';
import WafflerPage8 from '../images/UX/WW-Portfolio_Website_Pages-08-sm.jpg';
import WafflerPage9 from '../images/UX/WW-Portfolio_Website_Pages-09-sm.jpg';


class UXDesignWaffler3 extends Component {
    constructor(props) {
        super(props);
     
            this.state = {
            photoIndex: 0,
            isOpen: true,
            };
        }
     
      render() {
        const images = [
            {WafflerPage1},
            {WafflerPage2},
            {WafflerPage3},
            {WafflerPage4},
            {WafflerPage5},
            {WafflerPage6},
            {WafflerPage7},
            {WafflerPage8},
            {WafflerPage9},
            ];

        const { photoIndex, isOpen } = this.state;
     
        return (
          <div>
            <button className='lightboxButton' type="button" onClick={() => this.setState({ isOpen: true })}>
                Open Lightbox
            </button>
     
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
        )
    }
}

export default UXDesignWaffler3;

