import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants'
import arrowUp from '../assets/images/up-arrow.png'
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
    // const [scrollNav, setScrollNav] = useState(false)

    // const changeNav = () => {
    //     if(window.scrollY >= 80) {
    //         setScrollNav(true)
    //     } else {
    //         setScrollNav(false)
    //     }
    // }

    return (
        <ScrollToTop>
            <Img src={arrowUp}/>
        </ScrollToTop>
    )
}

const ScrollToTop = styled.div`
    position: absolute;
    bottom:30px;
    right:30px;
    width: 25px;
    height: 25px;
    border-radius: 9999px;
    background: ${COLORS.darkBlue[300]};
    border:none;
`
const Img = styled.div`

`
export default BackToTop
