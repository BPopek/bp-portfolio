import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for BC carousel
// import BreastCancerTees from '../images/GD/shirts/Breast Cancer/BreastCancerTees.jpg';
import BC1 from '../images/GD/shirts/Breast Cancer/BreastCancer_FFE2874.jpg'
import BC2 from '../images/GD/shirts/Breast Cancer/BreastCancer_FFE2876.jpg'
import BC3 from '../images/GD/shirts/Breast Cancer/BreastCancer_FFE2877.jpg'
import BC4 from '../images/GD/shirts/Breast Cancer/BreastCancer_FFE3921.jpg'
import BC5 from '../images/GD/shirts/Breast Cancer/BreastCancer_FFE3922.jpg'
import BC6 from '../images/GD/shirts/Breast Cancer/BreastCancer_FFE3923.jpg'
import BC7 from '../images/GD/shirts/Breast Cancer/BreastCancer_FFE3924.jpg'

class GraphicDesignBC extends Component {

    render(){
        
        return(
            <div className='parentDiv'>
                <Switch>
                    <Route path='/graphic-design/BC'>
                        <p className='projectDescriptiononSlideshow'>
                            A sample of designs created for AAFES stores to sell during Breast Cancer Month.<br />Designs are inspired by current trends as well as feedback from stores, managers and our military reps.
                        </p>
                    <div className='carouselDiv'>
                    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={'15s'}>
                                <div className='imageCarousel'>
                                    <img src={BC2} alt='Breast Cancer Shirt Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BC1} alt='Breast Cancer Shirt Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BC3} alt='Breast Cancer Shirt Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BC6} alt='Breast Cancer Shirt Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BC4} alt='Breast Cancer Shirt Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BC7} alt='Breast Cancer Shirt Design'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={BC5} alt='Breast Cancer Shirt Design'/>
                                </div>
                            </Carousel>
                        </div>   
                        {/* <img src={BreastCancerTees} className='GDesignShirt' alt='Breast Cancer Tees'/> */}
                    </Route>                 
                </Switch>
            </div>
        )
    }
}

export default GraphicDesignBC;