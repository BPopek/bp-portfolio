import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

import CPO1sm from '../images/GD/shirts/CPO/CPO1-sm.jpg';
import CPO2sm from '../images/GD/shirts/CPO/CPO2-sm.jpg';
import CPO3sm from '../images/GD/shirts/CPO/CPO3-sm.jpg';
import CPO1 from '../images/GD/shirts/CPO/CPO1.jpg';
import CPO2 from '../images/GD/shirts/CPO/CPO2.jpg';
import CPO3 from '../images/GD/shirts/CPO/CPO3.jpg';

import BreastCancerTees from '../images/GD/shirts/Breast Cancer/BreastCancerTees.jpg';

import SammyMoxie from '../images/GD/Sammy/SammyMoxie.jpg';
import SammyMoxieCB from '../images/GD/Sammy/SammyCBBottle.jpg';
import SammyMoxieTravel from '../images/GD/Sammy/SammyTravel.jpg';

import Catalog2018 from '../images/GD/print/AAFESCatalog2018.jpg';
import Catalog2017 from '../images/GD/print/AAFESCatalog2017.jpg';

class GraphicDesign extends Component {

    render(){
        
        return(
            <div className='GraphicDesignShirtsIndiv'>
                <Switch>
                    <Route path='/graphic-design/CPO'>
                        {/* <img src={CPO1} className='GDesignShirt' alt='CPO Shirts'/>
                        <img src={CPO2} className='GDesignShirt' alt='CPO Shirts'/>
                        <img src={CPO3} className='GDesignShirt' alt='CPO Shirts'/> */}
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} width={'90vw'}>
                            <div>
                                <img src={CPO1} />
                                {/* <p className="legend">Legend 1</p> */}
                            </div>
                            <div>
                                <img src={CPO2} />
                                {/* <p className="legend">Legend 2</p> */}
                            </div>
                            <div>
                                <img src={CPO3} />
                                {/* <p className="legend">Legend 3</p> */}
                            </div>
                        </Carousel>
                    </Route>
                    <Route path='/graphic-design/BC'>
                        <img src={BreastCancerTees} className='GDesignShirt' alt='Breast Cancer Tees'/>
                    </Route>
                    <Route path='/graphic-design/Sammy'>
                    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} width={'50vw'}>
                            <div>
                                <img src={SammyMoxie} />
                                {/* <p className="legend">Legend 1</p> */}
                            </div>
                            <div>
                                <img src={SammyMoxieCB} />
                                {/* <p className="legend">Legend 2</p> */}
                            </div>
                            <div>
                                <img src={SammyMoxieTravel} />
                                {/* <p className="legend">Legend 3</p> */}
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