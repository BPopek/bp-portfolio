import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Navbar(props) {
    const path = props.history.location.pathname
    // console.log(props.history)

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
            {/* <NavLink to='/profile' className='navbarLink' activeclassname='navbarLinkActive' >Profile</NavLink> */}
            { path === '/' ?
                <ScrollLink
                    activeClass='navbarLinkActive'
                    to='profile-container'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='navbarLink'>
                    Profile 
                </ScrollLink>
                :
                <Link to={{ pathname: '/', state: { section: 'profile-container'}}} className='navbarLink'>Profile</Link>
            }
            { path === '/' ?
                <ScrollLink
                    activeClass='navbarLinkActive'
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    className='navbarLink'>
                    All<span className='mobileHide'>&nbsp;Designs</span>
                </ScrollLink>
                :
                <Link to={{ pathname: '/', state: { section: 'home'}}} className='navbarLink' >
                    All<span className='mobileHide'>&nbsp;Designs</span></Link>
            }
            { path === '/' ?
                <ScrollLink
                    activeClass='navbarLinkActive'
                    to='web-design'
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    className='navbarLink'>
                    Web<span className='mobileHide'>&nbsp;Design</span>
                </ScrollLink>
                :
                <Link to={{ pathname: '/', state: { section: 'web-design'}}} className='navbarLink'>Web
                    <span className='mobileHide'>&nbsp;Designs</span></Link>
            }
            { path === '/' ?
                <ScrollLink
                    activeClass='navbarLinkActive'
                    to='graphic-design'
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    className='navbarLink'>
                    Graphic<span className='mobileHide'>&nbsp;Design</span>
                </ScrollLink>
                :
                <Link to={{ pathname: '/', state: { section: 'graphic-design'}}} className='navbarLink'>Graphic<span className='mobileHide'>&nbsp;Design</span></Link>
            }
            { path === '/' ?
                <ScrollLink
                    activeClass='navbarLinkActive'
                    to='ux-design'
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={500}
                    className='navbarLink'>
                    UX<span className='mobileHide'>&nbsp;Design</span>
                </ScrollLink>
                :
                <Link to={{ pathname: '/', state: { section: 'ux-design'}}} className='navbarLink' >UX
                    <span className='mobileHide'>&nbsp;Design</span></Link>
            }

        </div>
    )
}


export default withRouter(Navbar);