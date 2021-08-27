import React from 'react'
import styled from 'styled-components'
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BREAKPOINTS } from '../constants'
import { cardDetails } from './data'

const Features = () => {
    return (
        <FeaturesContainer id="features">
            <Wrapper>
                <TextHolder>
                    <Heading>Check out all the features</Heading>
                    <Description>
                        The features built into Kora were designed to help online
                        shop owners present their merchandise and find more customers
                    </Description>
                </TextHolder>

                <CardWrapper>
                    {cardDetails.map((cardDetail) => (
                        <SingleCardWrapper key={cardDetail.id}>
                            <BorderLine>
                                <IconWrap>
                                    <Icon>{cardDetail.icon}</Icon>
                                </IconWrap>
                            </BorderLine>
                            <CardHeading>{cardDetail.card_heading}</CardHeading>
                            <CardDescription>{cardDetail.card_description}</CardDescription>
                            <LearnMore>Learn more</LearnMore>
                        </SingleCardWrapper>

                    ))}
                </CardWrapper>
            </Wrapper>
        </FeaturesContainer>
    )
}

const FeaturesContainer = styled.section`
    background: ${COLORS.darkBlue[100]};
    padding-bottom:2rem;
    width: 100%;
    
    @media ${BREAKPOINTS.laptop} {
		margin-top:50vh;
	}
`;
const Wrapper = styled.div`
   width: 75%; 
   margin: 0 auto;
   padding-top:8rem;

   @media ${BREAKPOINTS.laptop} {
        width: 90%;
	}
`;
const TextHolder = styled.div`
   text-align: center;
`;
const Heading = styled.h1`
   color:${COLORS.white};
   font-weight:${FONT_WEIGHTS.bold};
   font-size:${FONT_SIZES.l};
`;
const Description = styled.p`
   padding:0 20rem;
   color:${COLORS.grey[100]};
   opacity: 0.7;
   font-weight:${FONT_WEIGHTS.regular};
   font-size:${FONT_SIZES.xs};

   @media ${BREAKPOINTS.tablet} {
        padding:0;
	}
   
`
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    align-items: flex-start;
    margin: 6rem 0;
    
    @media ${BREAKPOINTS.tablet} {
        grid-template-columns:1fr;
	}
    
`
const SingleCardWrapper = styled.div`
    
`
const IconWrap = styled.div`
    background:${COLORS.darkBlue[300]};
    padding: 1rem;
    height: 3rem;
    width: 3rem;
    border-radius: 9999px;
`
const BorderLine = styled.div`
    border-left:1px solid ${COLORS.lightOrange};
    padding-left:2rem;
`

const Icon = styled.div`
    width: 100%;
    margin-left:3px;
    color:${COLORS.lightOrange};
    font-weight:${FONT_WEIGHTS.semiBold};
    font-size:${FONT_SIZES.xl};
`
const CardHeading = styled.h1`
    color:${COLORS.white};
    font-weight:${FONT_WEIGHTS.semiBold};
    font-size:${FONT_SIZES.m};
    margin-top:1.5rem;
`
const CardDescription = styled.p`
    color:${COLORS.grey[100]};
    opacity: 0.7;
    font-weight:${FONT_WEIGHTS.regular};
    font-size:${FONT_SIZES.xs};
`
const LearnMore = styled.p`
    color:${COLORS.grey[100]};
    font-weight:${FONT_WEIGHTS.semiBold};
    font-size:${FONT_SIZES.xs};
    cursor: pointer;
`

export default Features
