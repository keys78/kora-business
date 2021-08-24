import React from 'react'
import styled from 'styled-components'
import { FONT_SIZES, FONT_WEIGHTS, COLORS } from '../constants'
import Button from './Button'
import Swipe from './Swipe'

const HelpYouGrow = ({ image, heading, description }) => {
    return (
        <HelpYouGrowContainer>
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
`
const Wrapper = styled.div`
    width: 75%;
    margin: 0 auto;
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
`
const ImgHolder = styled.div`

`
const Img = styled.img`
    
`
const HelpYouText = styled.div`

`
const Header = styled.div`

`
const Description = styled.div`

`

export default HelpYouGrow
