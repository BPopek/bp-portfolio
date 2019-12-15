import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for catalog carousel
import Catalog2018 from '../images/GD/print/AAFESCatalog2018.jpg';
import Catalog2017 from '../images/GD/print/AAFESCatalog2017.jpg';

class GraphicDesignPrint extends Component {

    render(){
        
        return(
            <>
                <Switch>
                <Route path='/graphic-design/Print'>
                        <img src={Catalog2018} className='GDesignShirt' alt='Catalogs'/>
                        <img src={Catalog2017} className='GDesignShirt' alt='Catalogs'/>
                    </Route>               
                </Switch>
            </>
        )
    }
}

export default GraphicDesignPrint;