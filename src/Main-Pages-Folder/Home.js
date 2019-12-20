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
import BlueAngels from '../images/GD/shirts/Blue Angels/BA671111-model-thumb.jpg';

//UX COMPONENTS
import Waffler from '../images/UX/WebsiteUXWafflerThumb.png';
import Profile from './Profile'
//MISC COMPONENT
import Misc from '../images/GD/MISC/IMG_4829.JPG'

class Home extends Component {

    render(){
        return(
            <div className='homeContainer'>
                <Link to='/web-design/CooperHewitt'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                            <h1 className='projectName'>Cooper Hewitt</h1>
                            <h2 className='projectType'>Web Design </h2>
                        </div>
                    </span>
                    <img src={CHThumb} className='thumb' alt='Cooper Hewitt Museum Project'></img>
                </Link>
                <Link to='/web-design/ClueMM'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                            <h1 className='projectName'>Clue Game</h1>
                            <h2 className='projectType'>Web Design </h2>
                        </div>
                    </span>
                    <img src={ClueMMThumb} className='thumb' alt='Clue Murder Mystery Project'></img>
                </Link>
                <Link to='/web-design/Alta'>
                <span className='projectParent'>
                    <div className='projectBar'>
                            <h1 className='projectName'>Alta Ski Area</h1>
                            <h2 className='projectType'>Web Design </h2>
                        </div>
                    </span>
                    <img src={Alta} className='thumb' alt='Alta Mockup Website'></img>
                </Link>
                <Link to='/graphic-design/BC'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                            <h1 className='projectName'>Breast Cancer</h1>
                            <h2 className='projectType'>Graphic Design </h2>
                        </div>
                    </span>
                    <img src={BreastCancerTeesThumb} className='thumb' alt='Breast Cancer Designs'></img>
                </Link>
                <Link to='/ux-design'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                                <h1 className='projectName'>Waffler Project</h1>
                                <h2 className='projectType'>UX Design </h2>
                            </div>
                        </span>
                    <img src={Waffler} className='thumb' alt='Waffler UX Project'></img>
                </Link>
                <Link to='/graphic-design/BlueAngels'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                            <h1 className='projectName'>Blue Angels</h1>
                            <h2 className='projectType'>Graphic Design </h2>
                        </div>
                    </span>
                    <img src={BlueAngels} className='thumb' alt='Blue Angels Designs'></img>
                </Link>
                <Link to='/graphic-design/Sammy'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                                <h1 className='projectName'>Sammy Has Moxie</h1>
                                <h2 className='projectType'>Graphic Design </h2>
                            </div>
                        </span>
                    <img src={SammyMoxieThumb} className='thumb' alt='Sammy Has Moxie Designs'></img>
                </Link>
                <Link to='/graphic-design/CPO'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                            <h1 className='projectName'>Navy Chief</h1>
                            <h2 className='projectType'>Graphic Design </h2>
                        </div>
                    </span>
                    <img src={CPO1Thumb} className='thumb' alt='CPO Shirt Designs'></img>
                </Link>
                <Link to='/graphic-design/Print'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                                <h1 className='projectName'>Print Designs</h1>
                                <h2 className='projectType'>Graphic Design </h2>
                            </div>
                        </span>
                    <img src={Catalog2018Thumb} className='thumb' alt='Print Designs'></img>
                </Link>
                <Link to='/graphic-design/MISC'>
                    <span className='projectParent'>
                        <div className='projectBar'>
                                <h1 className='projectName'>Misc Designs</h1>
                                <h2 className='projectType'>Graphic Design </h2>
                            </div>
                        </span>
                    <img src={Misc} className='thumb' alt='Misc Designs'></img>
                </Link>
                <Link to='/profile'>{Profile}</Link>

            </div>
        )
    }
}

export default Home;