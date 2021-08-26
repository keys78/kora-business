import React from 'react'
import styled from 'styled-components'
import { navLinks } from './data'
import logo from '../assets/images/logo.svg'
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BREAKPOINTS } from '../constants'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'

const NavLinks = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <NavWrapper>

                <LogoWrapper>
                    <Img onClick={toggleHome} src={logo} alt="logo" />
                </LogoWrapper>

                <NavLinksWrapper>
                    {(navLinks.map((navLink, i) => (
                        <SingleNav key={i}
                        to={navLink.path}
                        smooth={true} duration={500} spy={true}
                        exact='true'
                        >
                            {navLink.text}
                            <img src={navLink.icon} />
                        </SingleNav>
                    )))}
                    <SignUpBtn to="/signin">Start selling</SignUpBtn>
                </NavLinksWrapper>

            </NavWrapper>
        </>
    )
}


const NavWrapper = styled.section`
    width: 75%;
    margin: 0 auto;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoWrapper = styled.div`
    /* width: 100%; */
`

const Img = styled.img`
    width: auto;
    height:1.5rem;
    cursor: pointer;
    
`
const NavLinksWrapper = styled.div`
    display: flex;
    gap: 30px;
    /* width: 100%; */

`

const SingleNav = styled(LinkScroll)`
    list-style-type: none;
    color: ${COLORS.darkBlue[300]};
    font-weight: ${FONT_WEIGHTS.semiBold};
    font-size:${FONT_SIZES.xs};
    transition: 0.3s;
    margin-top: 10px;


    &:hover{
        color:${COLORS.lightOrange};
        cursor: pointer;
        transition: 0.3s;
    }
`
const SignUpBtn = styled.button`
    outline: none;
    border-radius: 50px;
    background: ${COLORS.darkBlue[300]};
    color: ${COLORS.white};
    transition: 0.3s;
    border:1px solid transparent;
    font-size:${FONT_SIZES.xs};
    padding:10px 17px ;
    width: 120px;

    &:hover{
        color:${COLORS.darkBlue[300]};
        background: transparent;
        cursor: pointer;
        transition: 0.3s;
        border: 1px solid ${COLORS.darkBlue[300]};
    }
`

export default NavLinks
