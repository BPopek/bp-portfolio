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
                                <img src={CPO1Thumb} className='thumb' alt='CPO Shirt Designs'></img>
                            </Link>
                            <Link to="/graphic-design/BC">
                                <img src={BreastCancerTeesThumb} className='thumb' alt='Breast Cancer Designs'></img>
                            </Link>
                            <Link to="/graphic-design/Sammy">
                                <img src={SammyMoxieThumb} className='thumb' alt='Sammy Has Moxie Designs'></img>
                            </Link>
                            <Link to="/graphic-design/Print">
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