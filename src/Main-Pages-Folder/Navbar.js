import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {

    render(){
        return(
            <div className='navbarCont'>
                <NavLink exact to='/' className='navbarLink' activeClassName='navbarLinkActive'>Home</NavLink>
                <NavLink exact to='/web-design' className='navbarLinkLg' activeClassName='navbarLinkActive'>Web Design</NavLink>
                <NavLink exact to='/graphic-design' className='navbarLinkLg' activeClassName='navbarLinkActive'>Graphic Design</NavLink>
                <NavLink exact to='/ux-design' className='navbarLinkLg' activeClassName='navbarLinkActive'>UX Design</NavLink>
                <NavLink exact to='/web-design' className='navbarLinkSm' activeClassName='navbarLinkActive'>Web</NavLink>
                <NavLink exact to='/graphic-design' className='navbarLinkSm' activeClassName='navbarLinkActive'>Graphic</NavLink>
                <NavLink exact to='/ux-design' className='navbarLinkSm' activeClassName='navbarLinkActive'>UX</NavLink>
                <NavLink exact to='/profile' className='navbarLink' activeClassName='navbarLinkActive'>Profile</NavLink>
            </div>
        )
    }
}

export default Navbar;