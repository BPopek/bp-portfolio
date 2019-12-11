import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//WEB COMPONENTS
import CHThumb from '../images/Web/CH-Sign-Thumb.jpg';
import ClueMMThumb from '../images/Web/clueMM-thumb.png';
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
                <a href="http://cooper-hewitt-sdm.surge.sh/">
                    <img src={CHThumb} className='thumb'></img>
                </a>
                <a href="https://clue-murder-mystery.herokuapp.com/">
                    <img src={ClueMMThumb} className='thumb' alt='Clue Murder Mystery Project'></img>
                </a>
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
                <Link to="/ux-design">
                    <img src={Waffler} className='thumb' alt='Waffler UX Project'></img>
                </Link>
            </div>
        )
    }
}

export default Home;