import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//WEB COMPONENTS
import CHThumb from '../images/Web/CH-Sign-Thumb.jpg';
import ClueMMThumb from '../images/Web/clueMM-thumb.png';
import Alta from '../images/Web/Alta-thumb.png';
//GD COMPONENTS
import CPO1Thumb from '../images/GD/shirts/CPO1-thumb.jpg';
import BreastCancerTeesThumb from '../images/GD/shirts/BreastCancerTees-thumb.jpg';
import SammyMoxieThumb from '../images/GD/Sammy/SammyMoxie-thumb.jpg';
import Catalog2018Thumb from '../images/GD/print/AAFESCatalog2018-thumb.jpg';
//UX COMPONENTS
import Waffler from '../images/UX/WebsiteUXWafflerThumb.png';


class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='homeContainer'>
                <Link to="/web-design/CooperHewitt">
                    <img src={CHThumb} className='thumb'></img>
                </Link>
                <Link to="/web-design/ClueMM">
                    <img src={ClueMMThumb} className='thumb' alt='Clue Murder Mystery Project'></img>
                </Link>
                <Link to="/web-design/Alta">
                    <img src={Alta} className='thumb' alt='Alta Mockup Website'></img>
                </Link>
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
                    <img src={Catalog2018Thumb} className='thumb' alt='Print Designs'></img>
                </Link>
                <Link to="/ux-design">
                    <img src={Waffler} className='thumb' alt='Waffler UX Project'></img>
                </Link>
            </div>
        )
    }
}

export default Home;