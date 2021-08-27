import React from 'react'
import styled from 'styled-components'
import { FONT_SIZES, FONT_WEIGHTS, COLORS, BREAKPOINTS } from '../constants'
import Button from './Button'
import Swipe from './Swipe'

const HelpYouGrow = ({ id, image, heading, description }) => {
    return (
        <HelpYouGrowContainer id={id}>
            <Wrapper>
                <TextWrapper>
                    <Text>Brands and shops that use Kora to grow their business</Text>
                    <Divide />
                    <Swipe />
                </TextWrapper>

                <HelpYou>
                    <ImgHolder>
                        <Img src={image} />
                    </ImgHolder>
                    <HelpYouText>
                        <Header>{heading}</Header>
                        <Description>{description}</Description>
                        <Button text="Sign up" />
                    </HelpYouText>
                </HelpYou>


            </Wrapper>
        </HelpYouGrowContainer>
    )
}

const HelpYouGrowContainer = styled.section`
    position: relative;
    margin-top: 100vh;
    height: 100vh;

    @media ${BREAKPOINTS.desktop} {
		margin-top: 120vh;
	}
`
const Wrapper = styled.div`
    width: 75%;
    margin: 0 auto;

    @media ${BREAKPOINTS.desktop} {
		width: 90%;
        text-align:center;
	}
   
`
const TextWrapper = styled.div`

`

const Text = styled.p`
    font-size: ${FONT_SIZES.s};
    font-weight: ${FONT_WEIGHTS.semiBold};
    color:${COLORS.black};
    text-align: center;
`

const Divide = styled.div`
    border-bottom: 1px solid ${COLORS.grey[300]};
    margin:30px 0;
`

const HelpYou = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    align-items: center;
    margin-top: 8rem;

   
    @media ${BREAKPOINTS.laptop} {
        grid-template-columns: 1fr;
	}
`
const ImgHolder = styled.div`
  
`
const Img = styled.img`
    @media ${BREAKPOINTS.tablet} {
		width: 90vw;
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

export default HelpYouGrow
