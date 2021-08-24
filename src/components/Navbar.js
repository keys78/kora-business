import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavLinks />
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    width: 75%;
    margin:0 auto;
    /* height: 75px; */
    /* background: green; */
    padding:20px 0;
`

export default Navbar
