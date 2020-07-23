import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for CPO carousel
import CPO1 from '../images/GD/shirts/CPO/CPO1.jpg';
import CPO2 from '../images/GD/shirts/CPO/CPO2.jpg';
import CPO3 from '../images/GD/shirts/CPO/CPO3.jpg';
import CPO4 from '../images/GD/shirts/CPO/190819-N-LI768-1127.jpg';
import CPO5 from '../images/GD/shirts/CPO/4671577.jpg';
import CPO6 from '../images/GD/shirts/CPO/SelecteesLeaveBoat.jpg';
import CPO7 from '../images/GD/shirts/CPO/35941070304_e16e779e7f_k.jpg';

class GraphicDesignCPO extends Component {

    render(){

        window.scrollTo(0,0);
        
        return(
            <div className='parentDiv'>
                <Switch>
                    <Route path='/graphic-design/CPO'>
                        <p className='projectDescriptiononSlideshow'>
                            Various designs created for the US Navy Chief Petty Officer Selectees.<br />T-shirts are worn during Fleet Week activities, which include training runs and exercises.<br /> There are also volunteer opportunities in the community.
                        </p>
                    <div className='carouselDiv'>
                    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={false} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={300}>
                                <div className='imageCarousel'>
                                    <img src={CPO1} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO2} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO7} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO4} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO5} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO6} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO3} alt='CPO Shirt Designs'/>
                                </div>
                            </Carousel>
                        </div>               
                    </Route>    
                </Switch>
            </div>
        )
    }
}

export default GraphicDesignCPO;