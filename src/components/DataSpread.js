import React from 'react'
import styled from 'styled-components'
import { FONT_SIZES, FONT_WEIGHTS, COLORS, BREAKPOINTS } from '../constants'
import Button from './Button'


const HelpYouGrow = ({ imgStart, button, list, image, heading, description, label, tag, obj1, obj2, obj3 }) => {
    return (
        <HelpYouGrowContainer>
            <Wrapper>
                <HelpYou imgStart={imgStart}>
                    <ImgHolder>
                        <Img src={image} />
                    </ImgHolder>
                    <HelpYouText>
                        <Tag>{tag}</Tag>
                        <Header>{heading}</Header>
                        <Description>{description}</Description>
                        <List list={list}>
                            <li>{obj1}</li>
                            <li>{obj2}</li>
                            <li>{obj3}</li>
                        </List>
                        <ButtonWrapper button={button} >
                            <Button text={label} />
                        </ButtonWrapper>
                    </HelpYouText>
                </HelpYou>


            </Wrapper>
        </HelpYouGrowContainer>
    )
}

const HelpYouGrowContainer = styled.section`
    position: relative;
    /* margin-top: 100vh; */
    /* height: 100vh; */
    width: 100%;
`
const Wrapper = styled.div`
    /* width: 75%; */
    margin: 0 auto;
`

const HelpYou = styled.div`
    display: flex;
    flex-direction: ${({imgStart}) => (imgStart ? 'row' : 'row-reverse')};
    gap: 3rem;
    align-items: center;
    margin-top: 8rem;

    @media ${BREAKPOINTS.laptop} {
        margin-top: 4rem;
        flex-direction: ${({imgStart}) => (imgStart ? 'column' : 'column-reverse')};
		
	}
`
const ImgHolder = styled.div`

`
const Img = styled.img`
    @media ${BREAKPOINTS.laptop} {
       width: 90%;
	}
`
const HelpYouText = styled.div`
    padding: 0 3rem;
`
const Header = styled.h1`
    font-size: ${FONT_SIZES.l};
    font-weight: ${FONT_WEIGHTS.bold};
    color: ${COLORS.darkBlue[300]};
    line-height: 2.3rem;
`
const Description = styled.p`
    font-size: ${FONT_SIZES.xs};
    font-weight: ${FONT_WEIGHTS.regular};
    color: ${COLORS.grey[300]};
    margin: 1.5rem 0;
    
`
const Tag = styled.div`
    width: 5rem;
    padding: 0.4rem 0;
    text-align: center;
    border-radius:999px;
    background: ${COLORS.veryLightOrange};
    color:${COLORS.lightOrange};

`

const List = styled.div`
    font-size: ${FONT_SIZES.xs};
    font-weight: ${FONT_WEIGHTS.regular};
    color: ${COLORS.grey[300]};
    line-height: 2rem;
    list-style-type:square;
    display: ${({ list }) => (list ? 'block' : 'none')};
`
const ButtonWrapper = styled.div`
    display: ${({ button }) => (button ? 'block' : 'none')};
`
export default HelpYouGrow
