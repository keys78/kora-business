import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BREAKPOINTS } from '../constants'
import styled from 'styled-components'

const SignInPage = () => {
    return (
        <div>
            SIGN IN
            <SignUpBtn to="/">Back Home</SignUpBtn>
        </div>
    )
}

const SignUpBtn = styled(LinkRouter)`
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

export default SignInPage
