import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for Sammy carousel
import SammyMoxie from '../images/GD/Sammy/SammyMoxie.jpg';
import SammyMoxieCB from '../images/GD/Sammy/SammyCBBottle.jpg';
import SammyMoxieTravel from '../images/GD/Sammy/SammyTravel.jpg';
import SammyMoxieMugs from '../images/GD/Sammy/SammyMugs.jpg';


class GraphicDesignSammy extends Component {

    render(){
        
        return(
            <>
                <Switch>
                    <Route path='/graphic-design/Sammy'>
                    <p className='projectDescription'>
                            xxxxxxxxxxxxxxxxxxxxxxxxxx.<br />
                        </p>                    
                        <div className='carouselDiv'>
                            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true}>
                                <div className='imageCarousel'>
                                    <img src={SammyMoxie} alt='Sammy Has Moxie'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={SammyMoxieMugs} alt='Sammy Has Moxie Bottle'/>
                                </div>
                                {/* <div className='imageCarousel'>
                                    <img src={SammyMoxieCB} alt='Sammy Has Moxie CamelBak Bottle'/>
                                </div> */}
                                {/* <div className='imageCarousel'>
                                    <img src={SammyMoxieTravel} alt='Sammy Has Moxie Travel Mug'/>
                                </div> */}
                            </Carousel>
                        </div>
                    
                    </Route>                 
                </Switch>
            </>
        )
    }
}

export default GraphicDesignSammy;