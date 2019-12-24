import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for catalog carousel
import Catalog2018 from '../images/GD/print/AAFESCatalog2018.jpg';
import Catalog2017 from '../images/GD/print/AAFESCatalog2017.jpg';
import WMCatalog2018 from '../images/GD/print/WalmartCatalog_2018.jpg';
import KQstuff from '../images/GD/print/KQGroup.jpg';

class GraphicDesignPrint extends Component {

    render(){
        
        return(
            <div className='parentDiv'>
                <Switch>
                    <Route path='/graphic-design/Print'>
                        <p className='projectDescriptiononSlideshow'>
                                A sample of print design including a variety of catalogs and print ads.<br />
                            </p>
                        <div className='carouselDiv'>
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={'10s'}>
                                    <div className='imageCarousel'>
                                        <img src={Catalog2018} alt='2018 Catalog'/>
                                    </div>
                                    
                                    <div className='imageCarousel'>
                                        <img src={WMCatalog2018} alt='2017 Catalog'/>
                                    </div>
                                    <div className='imageCarousel'>
                                        <img src={Catalog2017} alt='2017 Catalog'/>
                                    </div>
                                    <div className='imageCarousel'>
                                        <img src={KQstuff} alt='2017 Catalog'/>
                                    </div>
                                </Carousel>
                            </div>   
                            {/* <img src={Catalog2018} className='GDesignShirt' alt='Catalogs'/>
                            <img src={Catalog2017} className='GDesignShirt' alt='Catalogs'/> */}
                        </Route>               
                </Switch>
            </div>
        )
    }
}

export default GraphicDesignPrint;