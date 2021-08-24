import React from 'react'
import styled from 'styled-components'
import { COLORS, FONT_SIZES } from '../constants';

const Button = ({ text, primary, primary_space }) => {
    return (
        <>
        <GlobalButton primary_space={primary_space} primary={primary}> {text} </GlobalButton>
        </>
    )
}

const GlobalButton = styled.button`
    background:${({primary}) => (primary ? COLORS.white : COLORS.lightOrange)} ;
    color:${({primary}) => (primary ? COLORS.lightOrange : COLORS.white)} ;
    font-size:${FONT_SIZES.xs};
    padding:15px 30px;
    border-radius: 50px;
    outline: none;
    border:${({primary}) => (primary ? `1px solid ${COLORS.lightOrange}` : `1px solid ${COLORS.lightOrange}`)} ;
    cursor: pointer;
    transition: 0.4s;
    margin-left:${({primary_space}) => (primary_space ? '10px' : '')} ;;

    &:hover{
        background:${({primary}) => (primary ? COLORS.lightOrange : COLORS.white)} ;
        color:${({primary}) => (primary ? COLORS.white : COLORS.lightOrange)} ;
        transition: 0.4s;
    }
`

export default Button
