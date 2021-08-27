import React from 'react'
import styled from 'styled-components'
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BREAKPOINTS } from '../constants'
import TestimonialSwiper from './TestimonialSwiper'

const Testimonial = () => {
    return (
        <FeaturesContainer>
            <Wrapper>
                <TextHolder>
                    <Heading>Few words from shop owners</Heading>
                    <Description>
                        You can read below a few testimonials from satisfied shop owners.
                        Of course there are also some unhappy ones but they're not here
                    </Description>
                </TextHolder>
                <TestimonialSwiper />
            </Wrapper>
        </FeaturesContainer>
    )
}

const FeaturesContainer = styled.section`
    background: ${COLORS.darkBlue[100]};
    /* height: calc(100vh - 75px); */
    padding-bottom:6rem;
    width: 100%;
`;
const Wrapper = styled.div`
   width: 75%; 
   margin: 0 auto;
   padding-top:8rem;

   @media ${BREAKPOINTS.laptop} {
       width: 90%;
       padding-top:4rem;
	}
`;
const TextHolder = styled.div`
   text-align: center;
   margin-bottom: 4rem;
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

   @media ${BREAKPOINTS.laptop} {
        padding:0;
	}
   `

export default Testimonial
