import React, {Component} from 'react';
import WafflerFullPage from '../images/UX/WW-Portfolio.jpg';
import { NavLink, Link } from 'react-router-dom'

class UXDesignWafflerFullPage extends Component {
    
    render(){
        return(
            <div className='UX-FullWaffler ux-design'>
                {/* <NavLink to='/ux-design'> */}
                    {/* <div className='uxFullImage' background={WafflerFullPage} alt='Waffler Full Project'/> */}
                    <span className=''>
                        <Link to='/ux-design/waffler' className='homeTitle' >CLICK HERE TO VIEW INDIVIDUAL SLIDES OF WAFFLER PROJECT</Link>
                        </span>
                    <div className='homeWaffler' alt='Waffler Full Project'> 
                        <img src={WafflerFullPage} className='wafflerFullHeight'></img>
                    </div>
                {/* </NavLink> */}
            </div>
        )
    }
}

export default UXDesignWafflerFullPage;