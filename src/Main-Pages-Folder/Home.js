import React, { useLayoutEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Profile from '../Main-Pages-Folder/Profile';

//WEB COMPONENTS
import SchittsCreek from '../images/Web/Schitts-Creek-thumb.jpg';
import DJLuvaLuva from '../images/Web/DJLuvaLuva-Thumb.jpg';
import Ordino from '../images/Web/Ordino-thumb.jpg';
import WPExemplar from '../images/Web/WordpressExemplarThumb.jpg';
import CHThumb from '../images/Web/CH-Sign-Thumb.jpg';
import ClueMMThumb from '../images/Web/clueMM-thumb.jpg';
import Alta from '../images/Web/Alta-thumb.jpg';
import WebDesign from '../Web-Design-Folder/WebDesign';

//GD COMPONENTS
import CPO1Thumb from '../images/GD/shirts/CPO1-thumb.jpg';
import BreastCancerTeesThumb from '../images/GD/shirts/BreastCancerTees-thumb.jpg';
import SammyMoxieThumb from '../images/GD/Sammy/SammyMoxie-thumb.jpg';
import Catalog2018Thumb from '../images/GD/print/AAFESCatalog2018-thumb.jpg';
import BlueAngels from '../images/GD/shirts/Blue Angels/BA671111-model-thumb.jpg';
import GraphicDesign from '../Graphic-Design-Folder/GraphicDesign';

//UX COMPONENTS
import Waffler from '../images/UX/WebsiteUXWafflerThumb.jpg';
import UXDesign from '../UX-Design-Folder/UXDesignWaffler';
import UXDesignWafflerFullPage from '../UX-Design-Folder/UXDesignWafflerFullPage';

// import Profile from './Profile'

//MISC COMPONENT
import Misc from '../images/GD/MISC/IMG_4829.JPG';
var Scroll = require('react-scroll')
var scroller = Scroll.scroller;

function Home(props){

    useLayoutEffect(() => {
        scroller.scrollTo(props.location.state && props.location.state.section)
    }, [])
    console.log(props.location)
    console.log(props.location.state)

    return(
        <>
            <Profile id='profile-container' />
            <div className='homeSpacer'/>

            <div className='homeContainer home' id='home'>
                <div className='projectParentRelative'>
                    <Link to="/web-design/SchittsCreek">
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Schitt's Creek Trivia</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                    <img src={SchittsCreek} className='designthumb' alt="Schitt's Creek Fan Homepage"></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to="/web-design/DjLuvaLuva">
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>DJ Luva Luva</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={DJLuvaLuva} className='designthumb' alt='DJ Luva Luva Homepage'></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to="/web-design/Ordino">
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Ordino Job Organizer</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={Ordino} className='designthumb' alt='Ordino Job Organizer Sample Page'></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to="/web-design/WPExemplar">
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Wordpress Exemplar</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={WPExemplar} className='designthumb' alt='Wordpress Exemplar Sample Page'></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to='/web-design/CooperHewitt'>
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Cooper Hewitt</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={CHThumb} className='designthumb' alt='Cooper Hewitt Museum Project'></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to='/web-design/ClueMM'>
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Clue Game</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={ClueMMThumb} className='designthumb' alt='Clue Murder Mystery Project'></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to='/web-design/Alta'>
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Alta Ski Area</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={Alta} className='designthumb' alt='Alta Mockup Website'></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to='/graphic-design/BC'>
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
                    <Link to='/ux-design'>
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                    <h1 className='projectName'>Waffler Project</h1>
                                    <h2 className='projectType'>UX Design </h2>
                                </div>
                            </div>
                        <img src={Waffler} className='designthumb' alt='Waffler UX Project'></img>
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
                    <Link to='/graphic-design/Sammy'>
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
                    <Link to='/graphic-design/CPO'>
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
                    <Link to='/graphic-design/Print'>
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                    <h1 className='projectName'>Print Designs</h1>
                                    <h2 className='projectType'>Graphic Design </h2>
                                </div>
                            </div>
                    <img src={Catalog2018Thumb} className='designthumb' alt='Print Designs'></img>
                    </Link>
                </div>
                <div className='projectParentRelative'>
                    <Link to='/graphic-design/MISC'>
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                    <h1 className='projectName'>Misc Designs</h1>
                                    <h2 className='projectType'>Graphic Design </h2>
                                </div>
                            </div>
                    <img src={Misc} className='designthumb' alt='Misc Designs'></img>
                    </Link>
                </div>
                {/* <Link to='/profile'>{Profile}</Link> */}
            </div>
            <div className='homeSpacer'/>
            <WebDesign id='web-design' />
            <div className='homeSpacer'/>
            <GraphicDesign id='graphic-design' />
            <div className='homeSpacerUX'/>
            <UXDesignWafflerFullPage id='ux-design' />
        </>
    )
}


export default withRouter(Home);