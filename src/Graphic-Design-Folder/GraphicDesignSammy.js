import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for Sammy carousel
import SammyMoxie from '../images/GD/Sammy/SammyMoxie.jpg';
// import SammyMoxieCB from '../images/GD/Sammy/SammyCBBottle.jpg';
// import SammyMoxieTravel from '../images/GD/Sammy/SammyTravel.jpg';
import SammyMoxieMugs from '../images/GD/Sammy/SammyMugs.jpg';


class GraphicDesignSammy extends Component {

    render(){
        
        return(
            <div className='parentDiv'>
                <Switch>
                    <Route path='/graphic-design/Sammy'>
                        <p className='projectDescriptiononSlideshow'>
                            Designs created for a coworker's friend, whose daughter had been diagnosed with brain cancer. They are being used as gifts (t-shirts, water bottles and future products) to thank friends and family, as well as raffle prizes and fundraisers. Their daughter Sammy has kept a positive attitude through treatment, and her family often uses the phrase "Sammy's Got Moxie" to describe her mindset, which evolved to 'Sammy Has Moxie' during the design process.<br />
                        </p>                    
                        <div className='carouselDiv'>
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={'10s'}>
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
            </div>
        )
    }
}

export default GraphicDesignSammy;