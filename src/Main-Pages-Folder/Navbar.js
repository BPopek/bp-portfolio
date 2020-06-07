import React, {Component} from 'react';
import {NavLink,} from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Navbar(props) {
    const path = props.history.location.pathname

    return(
        <div className='navbarCont'>
            {/* <NavLink exact to='/' className='navbarLink' activeClassName='navbarLinkActive'>Home</NavLink>
            <NavLink exact to='/web-design' className='navbarLinkLg' activeClassName='navbarLinkActive'>Web Design</NavLink>
            <NavLink exact to='/graphic-design' className='navbarLinkLg' activeClassName='navbarLinkActive'>Graphic Design</NavLink>
            <NavLink exact to='/ux-design' className='navbarLinkLg' activeClassName='navbarLinkActive'>UX Design</NavLink>
            <NavLink exact to='/web-design' className='navbarLinkSm' activeClassName='navbarLinkActive'>Web</NavLink>
            <NavLink exact to='/graphic-design' className='navbarLinkSm' activeClassName='navbarLinkActive'>Graphic</NavLink>
            <NavLink exact to='/ux-design' className='navbarLinkSm' activeClassName='navbarLinkActive'>UX</NavLink>
            <NavLink exact to='/profile' className='navbarLink' activeClassName='navbarLinkActive'>Profile</NavLink> */}
            { path === '/' ?
                <ScrollLink
                    activeClass='active'
                    to='web-design'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='navbarLinkLg'>
                    Web Design
                </ScrollLink>
                :
                <NavLink to={{ pathname: "/", state: { section: "web-design"}}} className='navbarLinkLg' >Web Design</NavLink>
            }
        </div>
    )
}


export default Navbar;