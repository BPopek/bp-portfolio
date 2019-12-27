import React, {Component} from 'react';
// import Waffler from '../images/UX/WebsiteUXWafflerThumb.png';
// import { NavLink } from 'react-router-dom'
// import WafflerFullPage from '../images/UX/WW-Portfolio.jpg';
import { Carousel } from 'react-responsive-carousel';

import WafflerPage1 from '../images/UX/UX_WW-Portfolio_Website_Pages-01-sm.jpg';
import WafflerPage2 from '../images/UX/UX_WW-Portfolio_Website_Pages-02-sm.jpg';
import WafflerPage3 from '../images/UX/UX_WW-Portfolio_Website_Pages-03-sm.jpg';
import WafflerPage4 from '../images/UX/UX_WW-Portfolio_Website_Pages-04-sm.jpg';
import WafflerPage5 from '../images/UX/UX_WW-Portfolio_Website_Pages-05-sm.jpg';
import WafflerPage6 from '../images/UX/UX_WW-Portfolio_Website_Pages-06-sm.jpg';
import WafflerPage7 from '../images/UX/UX_WW-Portfolio_Website_Pages-07-sm.jpg';
import WafflerPage8 from '../images/UX/UX_WW-Portfolio_Website_Pages-08-sm.jpg';
import WafflerPage9 from '../images/UX/UX_WW-Portfolio_Website_Pages-09-sm.jpg';

class UXDesignWaffler extends Component {

    render(){
        return(
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={'15s'}>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage1}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage2}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage3}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage4}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage5}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage6}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage7}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage8}  alt='Waffler Project'/>
                </div>
                <div className='imageCarouselUX'>
                    <img src={WafflerPage9}  alt='Waffler Project'/>
                </div>
            </Carousel>
        )
    }
}

export default UXDesignWaffler;