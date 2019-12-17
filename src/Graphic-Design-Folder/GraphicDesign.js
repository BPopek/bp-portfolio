import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';

// thumbnails for GD page
import CPO1Thumb from '../images/GD/shirts/CPO1-thumb.jpg';
import BreastCancerTeesThumb from '../images/GD/shirts/BreastCancerTees-thumb.jpg';
import SammyMoxieThumb from '../images/GD/Sammy/SammyMoxie-thumb.jpg';
import Catalog2018Thumb from '../images/GD/print/AAFESCatalog2018-thumb.jpg';

class GraphicDesign extends Component {

    render(){
        
        return(
            <div>
                <Switch>
                    <div className='homeContainer'>
                        <Route path='/graphic-design'>
                            <Link to="/graphic-design/CPO">
                                <span className='projectParent'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Navy Chief</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </span>
                                <img src={CPO1Thumb} className='thumb' alt='CPO Shirt Designs'></img>
                            </Link>
                            <Link to="/graphic-design/BC">
                                <span className='projectParent'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Breast Cancer</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </span>
                                <img src={BreastCancerTeesThumb} className='thumb' alt='Breast Cancer Designs'></img>
                            </Link>
                            <Link to="/graphic-design/Sammy">
                                <span className='projectParent'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Sammy Has Moxie</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                </span>
                                <img src={SammyMoxieThumb} className='thumb' alt='Sammy Has Moxie Designs'></img>
                            </Link>
                            <Link to="/graphic-design/Print">
                                <span className='projectParent'>
                                    <div className='projectBar'>
                                        <h1 className='projectName'>Print Designs</h1>
                                        <h2 className='projectType'>Graphic Design </h2>
                                    </div>
                                    </span>
                                <img src={Catalog2018Thumb} className='thumb' alt='Catalog Designs'></img>
                            </Link>
                        </Route>
                    </div>

                </Switch>
            </div>
        )
    }
}

export default GraphicDesign;