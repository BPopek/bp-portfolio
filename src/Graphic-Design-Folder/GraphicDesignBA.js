import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for CPO carousel
import BA1 from '../images/GD/shirts/Blue Angels/BA671111.jpg';
import BA2 from '../images/GD/shirts/Blue Angels/BA671112.jpg';
import BA3 from '../images/GD/shirts/Blue Angels/FFE2354_BY.jpg';
import BA4 from '../images/GD/shirts/Blue Angels/FFE2355_BY.jpg';
import BA5 from '../images/GD/shirts/Blue Angels/FFE2634_BY.jpg';
import BA6 from '../images/GD/shirts/Blue Angels/FFE2355_BY.jpg';

class GraphicDesignBA extends Component {

    render(){
        return(
            <div className='parentDiv'>
                <Switch>
                    <Route path='/graphic-design/BlueAngels'>
                        <p className='projectDescriptiononSlideshow'>
                            Various Blue Angel designs created for sale at retail outlets as well as the Flight Deck Museum.<br />
                        </p>
                    <div className='carouselDiv'>
                            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={'10s'}>
                                <div className='imageCarousel'>
                                    <img src={BA1} alt='Blue Angels Hoodie Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BA2} alt='Blue Angels Shirt Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BA3} alt='Blue Angels Cap Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BA4} alt='Blue Angels Cap Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BA5} alt='Blue Angels Cap Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BA6} alt='Blue Angels Cap Design'/>
                                </div>
                            </Carousel>
                        </div>               
                    </Route>    
                </Switch>
            </div>
        )
    }
}

export default GraphicDesignBA;