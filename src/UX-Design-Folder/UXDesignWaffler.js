import React, {Component} from 'react';
import UXDesignWafflerCarousel from './UXDesignWafflerCarousel';
// import Waffler from '../images/UX/WebsiteUXWafflerThumb.png';
// import { NavLink } from 'react-router-dom'
// import WafflerFullPage from '../images/UX/WW-Portfolio.jpg';
// import { Carousel } from 'react-responsive-carousel';

class UXDesignWaffler extends Component {

    render(){
        return(
            <div className='carouselDiv'>
                <UXDesignWafflerCarousel />
            </div>
        )
    }
}

export default UXDesignWaffler;