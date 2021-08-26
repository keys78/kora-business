import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants'
import { useState, useEffect } from 'react'
import arrowUp from '../assets/images/up-arrow.png'
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const [showButton, setShowButton] = useState(null)

    const changeNav = () => {
        if(window.scrollY >= 700) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <ScrollToTop className={showButton ? '' : 'hide'} onClick={toggleHome}>
            <Img src={arrowUp}/>
        </ScrollToTop>
    )
}

const ScrollToTop = styled.div`
    position: fixed;
    bottom:30px;
    right:30px;
    width: 30px;
    height: 30px;
    border-radius: 9999px;
    background: ${COLORS.darkBlue[300]};
    border:none;
    transition: 0.4s;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
        transition: 0.4s;

    }
`
const Img = styled.img`
    z-index: 10;
    width: 15px;
    height: 15px;
    margin-left:7px;
    margin-top:6px;
`
export default BackToTop
