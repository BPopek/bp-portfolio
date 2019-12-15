import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for BC carousel
import BreastCancerTees from '../images/GD/shirts/Breast Cancer/BreastCancerTees.jpg';



class GraphicDesignBC extends Component {

    render(){
        
        return(
            <>
                <Switch>
                <Route path='/graphic-design/BC'>
                        <img src={BreastCancerTees} className='GDesignShirt' alt='Breast Cancer Tees'/>
                    </Route>                 
                </Switch>
            </>
        )
    }
}

export default GraphicDesignBC;