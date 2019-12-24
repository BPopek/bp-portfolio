import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';

// thumbnails for GD page
import CPO1Thumb from '../images/GD/shirts/CPO1-thumb.jpg';
import BreastCancerTeesThumb from '../images/GD/shirts/BreastCancerTees-thumb.jpg';
import SammyMoxieThumb from '../images/GD/Sammy/SammyMoxie-thumb.jpg';
import Catalog2018Thumb from '../images/GD/print/AAFESCatalog2018-thumb.jpg';
import BlueAngels from '../images/GD/shirts/Blue Angels/BA671111-model-thumb.jpg';

import Misc from '../images/GD/MISC/IMG_4829.JPG'

class GraphicDesign extends Component {

    render(){
        
        return(
            <div>
                <Switch>
                    <div className='homeContainer'>
                        <Route path='/graphic-design'>
                        <div className='projectParentRelative'>
                            <Link to="/graphic-design/CPO">
                                <div className='projectParentAbsolute'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Navy Chief</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </div>
                                <img src={CPO1Thumb} className='designthumb' alt='CPO Shirt Designs'></img>
                            </Link>
                        </div>
                        <div className='projectParentRelative'>
                            <Link to="/graphic-design/BC">
                                    <div className='projectParentAbsolute'>
                                        <div className='projectBar'>
                                            <h1 className='projectName'>Breast Cancer</h1>
                                            <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </div>
                                <img src={BreastCancerTeesThumb} className='designthumb' alt='Breast Cancer Designs'></img>
                            </Link>
                        </div>
                        <div className='projectParentRelative'>
                            <Link to='/graphic-design/BlueAngels'>
                                <div className='projectParentAbsolute'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Blue Angels</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </div>
                                <img src={BlueAngels} className='designthumb' alt='Blue Angels Designs'></img>
                            </Link>
                        </div>

                        <div className='projectParentRelative'>
                            <Link to="/graphic-design/Sammy">
                                <div className='projectParentAbsolute'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Sammy Has Moxie</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </div>
                                <img src={SammyMoxieThumb} className='designthumb' alt='Sammy Has Moxie Designs'></img>
                            </Link>
                        </div>

                        <div className='projectParentRelative'>
                            <Link to="/graphic-design/Print">
                                <div className='projectParentAbsolute'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Print Designs</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                    </div>
                                <img src={Catalog2018Thumb} className='designthumb' alt='Catalog Designs'></img>
                            </Link>
                        </div>

                        <div className='projectParentRelative'>
                            <Link to='/graphic-design/MISC'>
                                <div className='projectParent'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Misc Designs</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </div>
                            <img src={Misc} className='designthumb' alt='Misc Designs'></img>
                            </Link>
                        </div>
                        </Route>
                    </div>
                </Switch>
            </div>
        )
    }
}

export default GraphicDesign;