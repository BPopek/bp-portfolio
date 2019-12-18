import React from 'react';
import {NavLink} from 'react-router-dom';

function Footer() {
    return(
        <div className='footCont'>
            <a href='https://www.linkedin.com/in/betsypopek/' className='footerLink'>
                LinkedIn
            </a>
            <a href='https://github.com/BPopek' className='footerLink'>GitHub</a>
            <a href='https://www.instagram.com/betsypopek/' className='footerLink'>Instagram</a>
            <p className='footerLink'>Say Hello!</p>
        </div>
    )
}

export default Footer;