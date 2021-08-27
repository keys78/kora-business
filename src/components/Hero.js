import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import heroBg from '../assets/images/details-1-background.png'
import { heroDetails } from './data'
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BREAKPOINTS } from '../constants'

const Hero = ({ primary, primary_space }) => {
    return (
        <HeroBackground >
            <HeroContainer id="home">
                <HeroGrid>
                    <HeroArticles>
                        <Header>{heroDetails.header}</Header>
                        <Text>{heroDetails.text}</Text>
                        <ButtonHolder>
                            <Button primary={primary} text="Sign up for free" />
                            <Button primary_space primary={!primary} text="discover" />
                        </ButtonHolder>
                    </HeroArticles>
                    <HeroImage>
                        <Img src={heroDetails.image} />
                    </HeroImage>
                </HeroGrid>
            </HeroContainer>
        </HeroBackground>
    )
}

const HeroBackground = styled.section`
    position: absolute;
    top:0;
    left:0;
    right:0;
    height:100vh;
    width: 100%;
    z-index: -1;
    background-image: url(${heroBg});

`
const HeroContainer = styled.div`
    width: 75%;
    margin: 0 auto;
    padding-top:150px;

    @media ${BREAKPOINTS.laptop} {
		width:90%;
        padding-top:100px;
	}
`
const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    align-items: center;

    @media ${BREAKPOINTS.laptop} {
		grid-template-columns: 1fr;
	}

`
const HeroArticles = styled.div`
    width: 80%;

    @media ${BREAKPOINTS.laptop} {
		width: 100%;
        text-align:center;
	}
`
const Header = styled.div`
    color:${COLORS.darkBlue[300]};
    font-size:${FONT_SIZES.xxl};
    font-weight: ${FONT_WEIGHTS.bold};

    @media ${BREAKPOINTS.laptop} {
		width: 100%;
        font-size:${FONT_SIZES.xl};
        line-height: 3rem;
	}
`
const Text = styled.div`
    color:${COLORS.grey[300]};
    font-size:${FONT_SIZES.s};
    padding: 1.5rem 0;

`
const HeroImage = styled.div`

`
const Img = styled.img`
    width: 100%;
`

const ButtonHolder = styled.div`
    @media ${BREAKPOINTS.laptop} {
		margin:0.7rem 0 4rem 0;
	}
`
export default Hero
