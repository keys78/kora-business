import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <NavbarWrapper scrollNav={scrollNav}>
            <NavLinks />
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    width: 100%;
    margin:0 auto;
    /* height: 75px; */
    background: ${({ scrollNav }) => ( scrollNav ? '#FFF5EE' : 'transparent')};
    position:fixed;
    top:0;
    z-index: 999999;;
    padding:20px 0;
    transition: 0.5s;
`

export default Navbar
