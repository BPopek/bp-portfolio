import React, {Component} from 'react';
import GraphicDesign from './GraphicDesign'
import {Link} from 'react-router-dom';

class GraphicDesignContainer extends Component {
    constructor(){
        super()
    }

    render(){

        // const mapGraphicDesigns = GraphicDesign.map(design => <Link to={`/products/${design}`}>  </Link>)

        return(
            <div className='Container'>
                <GraphicDesign />

            </div>
        )
    }
}

export default GraphicDesignContainer;