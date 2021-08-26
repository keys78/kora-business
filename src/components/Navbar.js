import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <NavbarWrapper id="home">
            <NavLinks />
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    width: 100%;
    margin:0 auto;
    /* height: 75px; */
    background: green;
    position:fixed;
    top:0;
    z-index: 999999;;
    padding:20px 0;
`

export default Navbar
