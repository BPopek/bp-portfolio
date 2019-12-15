import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

//thumbs for web page
import CHThumb from '../images/Web/CH-Sign-Thumb.jpg';
import ClueMMThumb from '../images/Web/clueMM-thumb.png';
import Alta from '../images/Web/Alta-thumb.png';


class WebDesign extends Component {
    render(){
        return(
            <div className='homeContainer'>
                <Switch>
                    <Route path='/web-design'>
                        <Link to="/web-design/CooperHewitt">
                            <img src={CHThumb} className='thumb' alt='Cooper Hewitt Project'></img>
                        </Link>
                        <Link to="/web-design/ClueMM">
                            <img src={ClueMMThumb} className='thumb' alt='Clue Murder Mystery Project'></img>
                            </Link>
                            <Link to="/web-design/Alta">
                            <img src={Alta} className='thumb' alt='Alta Mockup Website'></img>
                        </Link>
                        {/* <a href="http://cooper-hewitt-sdm.surge.sh/">
                            <img src={CHThumb} className='thumb' alt='Cooper Hewitt Project'></img>
                        </a>
                        <a href="https://clue-murder-mystery.herokuapp.com/">
                            <img src={ClueMMThumb} className='thumb' alt='Clue Murder Mystery Project'></img>
                        </a>
                        <a href="http://business-time-alta.surge.sh//">
                            <img src={Alta} className='thumb' alt='Alta Mockup Website'></img>
                        </a> */}
                    </Route>
                </Switch>
            </div>

        )
    }
}

export default WebDesign;