import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
// thumbnails for GD page
import CPO1Thumb from '../images/GD/shirts/CPO1-thumb.jpg';
import BreastCancerTeesThumb from '../images/GD/shirts/BreastCancerTees-thumb.jpg';
import SammyMoxieThumb from '../images/GD/Sammy/SammyMoxie-thumb.jpg';
import Catalog2018Thumb from '../images/GD/print/AAFESCatalog2018-thumb.jpg';
//images for CPO carousel
import CPO1 from '../images/GD/shirts/CPO/CPO1.jpg';
import CPO2 from '../images/GD/shirts/CPO/CPO2.jpg';
import CPO3 from '../images/GD/shirts/CPO/CPO3.jpg';
//images for BC carousel
import BreastCancerTees from '../images/GD/shirts/Breast Cancer/BreastCancerTees.jpg';
//images for Sammy carousel
import SammyMoxie from '../images/GD/Sammy/SammyMoxie.jpg';
import SammyMoxieCB from '../images/GD/Sammy/SammyCBBottle.jpg';
import SammyMoxieTravel from '../images/GD/Sammy/SammyTravel.jpg';
//images for catalog carousel
import Catalog2018 from '../images/GD/print/AAFESCatalog2018.jpg';
import Catalog2017 from '../images/GD/print/AAFESCatalog2017.jpg';

class GraphicDesign extends Component {

    render(){
        
        return(
            <div>
                <Switch>
                    <div className='homeContainer'>
                        <Route path='/graphic-design'>
                            <Link to="/graphic-design/CPO">
                                <img src={CPO1Thumb} className='thumb' alt='CPO Shirt Designs'></img>
                            </Link>
                            <Link to="/graphic-design/BC">
                                <img src={BreastCancerTeesThumb} className='thumb' alt='Breast Cancer Designs'></img>
                            </Link>
                            <Link to="/graphic-design/Sammy">
                                <img src={SammyMoxieThumb} className='thumb' alt='Sammy Has Moxie Designs'></img>
                            </Link>
                            <Link to="/graphic-design/Catalogs">
                                <img src={Catalog2018Thumb} className='thumb' alt='Catalog Designs'></img>
                            </Link>
                        </Route>
                    </div>
                    <Route path='/graphic-design/CPO'>
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} width={'90vw'}>
                            <div>
                                <img src={CPO1} alt='CPO Shirt Designs'/>
                            </div>
                            <div>
                                <img src={CPO2} alt='CPO Shirt Designs'/>
                            </div>
                            <div>
                                <img src={CPO3} alt='CPO Shirt Designs'/>
                            </div>
                        </Carousel>
                    </Route>
                    <Route path='/graphic-design/BC'>
                        <img src={BreastCancerTees} className='GDesignShirt' alt='Breast Cancer Tees'/>
                    </Route>
                    <Route path='/graphic-design/Sammy'>
                    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} width={'50vw'}>
                            <div>
                                <img src={SammyMoxie} alt='Sammy Has Moxie'/>
                            </div>
                            <div>
                                <img src={SammyMoxieCB} alt='Sammy Has Moxie CamelBak Bottle'/>
                            </div>
                            <div>
                                <img src={SammyMoxieTravel} alt='Sammy Has Moxie Travel Mug'/>
                            </div>
                        </Carousel>
                        {/* <img src={SammyMoxie} className='GDesignShirt' alt='Sammy Has Moxie'/>
                        <img src={SammyMoxieCB} className='GDesignShirt' alt='Sammy Has Moxie CamelBak'/>
                        <img src={SammyMoxieTravel} className='GDesignShirt' alt='Sammy Has Moxie Travel Mug'/> */}
                    </Route>
                    <Route path='/graphic-design/Catalogs'>
                        <img src={Catalog2018} className='GDesignShirt' alt='Catalogs'/>
                        <img src={Catalog2017} className='GDesignShirt' alt='Catalogs'/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default GraphicDesign;