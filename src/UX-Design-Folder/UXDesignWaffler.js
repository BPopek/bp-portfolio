import React, {Component} from 'react';
import Waffler from '../images/UX/WebsiteUXWafflerThumb.png';
import { NavLink } from 'react-router-dom'
import WafflerFullPage from '../images/UX/WW-Portfolio.jpg';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

import WafflerPage1 from '../images/UX/WW-Portfolio_Website_Pages-01-sm.jpg';
import WafflerPage2 from '../images/UX/WW-Portfolio_Website_Pages-02-sm.jpg';
import WafflerPage3 from '../images/UX/WW-Portfolio_Website_Pages-03-sm.jpg';
import WafflerPage4 from '../images/UX/WW-Portfolio_Website_Pages-04-sm.jpg';
import WafflerPage5 from '../images/UX/WW-Portfolio_Website_Pages-05-sm.jpg';
import WafflerPage6 from '../images/UX/WW-Portfolio_Website_Pages-06-sm.jpg';
import WafflerPage7 from '../images/UX/WW-Portfolio_Website_Pages-07-sm.jpg';
import WafflerPage8 from '../images/UX/WW-Portfolio_Website_Pages-08-sm.jpg';
import WafflerPage9 from '../images/UX/WW-Portfolio_Website_Pages-09-sm.jpg';


class UXDesignWaffler extends Component {

    render(){
        return(
            <div className='uxIndiv'>
                <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} width={'80vw'}>
                            <div className='carouselDiv'>
                                <img src={WafflerPage1} />
                            </div>
                            <div>
                                <img src={WafflerPage2} />
                            </div>
                            <div>
                                <img src={WafflerPage3} />
                            </div>
                            <div>
                                <img src={WafflerPage4} />
                            </div>
                            <div>
                                <img src={WafflerPage5} />
                            </div>
                            <div>
                                <img src={WafflerPage6} />
                            </div>
                            <div>
                                <img src={WafflerPage7} />
                            </div>
                            <div>
                                <img src={WafflerPage8} />
                            </div>
                            <div>
                                <img src={WafflerPage9} />
                            </div>
                        </Carousel>
            </div>
        )
    }
}

export default UXDesignWaffler;