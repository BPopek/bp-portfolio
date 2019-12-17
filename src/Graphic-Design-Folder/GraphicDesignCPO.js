import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for CPO carousel
import CPO1 from '../images/GD/shirts/CPO/CPO1.jpg';
import CPO2 from '../images/GD/shirts/CPO/CPO2.jpg';
import CPO3 from '../images/GD/shirts/CPO/CPO3.jpg';


class GraphicDesignCPO extends Component {

    render(){
        
        return(
            <div className='parentDiv'>
                <Switch>
                    <div className='carouselDiv'>
                        <Route path='/graphic-design/CPO'>
                        <p className='projectDescription'>
                    Various designs created for the US Navy Chief Petty Officers. T-shirts are worn during Fleet Week activities, which include training runs and exercises as well as volunteer opportunities in the community.
                </p>
                            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} width={'90vw'} >
                                <div className='imageCarousel'>
                                    <img src={CPO1} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO2} alt='CPO Shirt Designs'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={CPO3} alt='CPO Shirt Designs'/>
                                </div>
                            </Carousel>
                        </Route>    
                    </div>               
                </Switch>
            </div>
        )
    }
}

export default GraphicDesignCPO;