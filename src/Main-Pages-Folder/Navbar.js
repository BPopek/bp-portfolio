import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='navbarCont'>
                <NavLink exact to='/' className='navbarLink' activeClassName='navbarLinkActive'>Home</NavLink>
                <NavLink exact to='/web-design' className='navbarLink' activeClassName='navbarLinkActive'>Web Design</NavLink>
                <NavLink exact to='/graphic-design' className='navbarLink' activeClassName='navbarLinkActive'>Graphic Design</NavLink>
                <NavLink exact to='/ux-design' className='navbarLink' activeClassName='navbarLinkActive'>UX Design</NavLink>
                <NavLink exact to='/profile' className='navbarLink' activeClassName='navbarLinkActive'>Profile</NavLink>
            </div>
        )
    }
}

export default Navbar;