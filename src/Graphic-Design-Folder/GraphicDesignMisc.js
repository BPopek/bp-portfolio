import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for BC carousel
import misc1 from '../images/GD/MISC/IMG_4730.jpg'
import misc2 from '../images/GD/MISC/IMG_4829.jpg'
import misc3 from '../images/GD/MISC/IMG_4830.jpg'

class GraphicDesignMisc extends Component {

    render(){
        
        return(
            <div className='parentDiv'>
                <Switch>
                    <Route path='/graphic-design/MISC'>
                        <p className='projectDescriptiononSlideshow'>
                            Various cast metal items for the Boy Scouts of America.<br />Products shown include a belt buckle and bolo or neckerchief slides.
                        </p>
                    <div className='carouselDiv'>
                    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={'15s'}>
                                <div className='imageCarousel'>
                                    <img src={misc1} alt='Boy Scout Jamboree Belt Buckle'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={misc2} alt='Boy Scout SBR Bolo Tie'/>
                                </div>
                                <div className='imageCarousel'>
                                    <img src={misc3} alt='Boy Scout SBR Bolo Tie'/>
                                </div>
                            </Carousel>
                        </div>   
                    </Route>                 
                </Switch>
            </div>
        )
    }
}

export default GraphicDesignMisc;