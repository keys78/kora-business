import React from 'react'
import styled from 'styled-components'
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BREAKPOINTS } from '../constants'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <About>
                    <Heading>About Kora</Heading>
                    <Text>
                        Kora is a SaaS app website Bootstrap HTML template packed with
                        features like logo slider, details lightbox, testimonial slider dropdown
                    </Text>
                </About>
                <Links>
                    <Heading>Links</Heading>
                    <Important>Important: Terms & Conditions, Privacy Policy</Important>
                    <Important>Useful: Colorpicker, Icon Library, Illustrations</Important>
                    <Important>Menu: Home, Intro, Features, Details</Important>
                </Links>
                <SocialIcons>
                    <SocialIconWrapper>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaPinterest />
                        <FaInstagram />
                    </SocialIconWrapper>
                </SocialIcons>
            </Wrapper>
        </FooterContainer>
    )
}

const FooterContainer = styled.section`
    background: ${COLORS.grey[100]};
`
const Wrapper = styled.div`
    width: 75%;
    margin:0 auto;
    display: grid;
    grid-gap: 3rem;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
`
const About = styled.div``
const Links = styled.div``
const SocialIcons = styled.div``

const Heading = styled.h1`
   color:${COLORS.grey[300]};
   font-weight:${FONT_WEIGHTS.bold};
   font-size:${FONT_SIZES.s};
`
const Text = styled.h1`
   color:${COLORS.grey[300]};
   font-weight:${FONT_WEIGHTS.regular};
   font-size:${FONT_SIZES.xs};
`

const SocialIconWrapper = styled.div``
const Important = styled.div``

export default Footer
