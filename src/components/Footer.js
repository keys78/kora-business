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
                    <Useful>Useful: Colorpicker, Icon Library, Illustrations</Useful>
                    <Menu>Menu: Home, Intro, Features, Details</Menu>
                </Links>
                <Socials>
                    <SocialIcons>
                        <SocialIconWrapper><FaFacebookF /></SocialIconWrapper>
                        <SocialIconWrapper><FaPinterest /></SocialIconWrapper>
                        <SocialIconWrapper><FaTwitter /></SocialIconWrapper>
                        <SocialIconWrapper><FaInstagram /></SocialIconWrapper>
                    </SocialIcons>
                    <Contact>We would love to hear from you </Contact>
                    <Site>contact@site.com</Site>
                </Socials>
            </Wrapper>
            <Copyright>Copyright © | Emcodes</Copyright>
        </FooterContainer>
    )
}

const FooterContainer = styled.section`
    background: ${COLORS.grey[100]};
    padding-top:5rem;
    padding-bottom:1rem;
`
const Wrapper = styled.div`
    width: 75%;
    margin:0 auto;
    display: grid;
    grid-gap: 3rem;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);

    @media ${BREAKPOINTS.laptop} {
		width: 90%; 
        grid-template-columns: 1fr;
	}
`
const About = styled.div``
const Links = styled.div``
const Socials = styled.div``
const SocialIcons = styled.div`
    display: flex;
    gap:2rem;
`

const Heading = styled.h1`
   color:${COLORS.grey[300]};
   font-weight:${FONT_WEIGHTS.bold};
   font-size:${FONT_SIZES.s};
`
const Text = styled.h2`
   color:${COLORS.grey[300]};
   font-weight:${FONT_WEIGHTS.regular};
   font-size:${FONT_SIZES.nuetta};
   line-height: 1.5rem;
   margin-top: 1.5rem;
`

const SocialIconWrapper = styled.div`
    background:${COLORS.white};
    font-size:${FONT_SIZES.s};
    padding: 1rem 1rem 1rem 0.8rem;
    height: 1rem;
    width: 1rem;
    border-radius: 9999px;
    text-align: center;
    margin:auto 0;
    transition: 0.4s;

    &:hover{
        color:${COLORS.white};
        background:${COLORS.grey[300]};
        transition: 0.4s;
        cursor: pointer;

    }
`

const Important = styled.h2`
    color:${COLORS.grey[300]};
    font-weight:${FONT_WEIGHTS.regular};
    font-size:${FONT_SIZES.nuetta};
    margin-top: 1.5rem;
`
const Useful = styled.h2`
    color:${COLORS.grey[300]};
    font-weight:${FONT_WEIGHTS.regular};
    font-size:${FONT_SIZES.nuetta};
`
const Menu = styled.h2`
    color:${COLORS.grey[300]};
    font-weight:${FONT_WEIGHTS.regular};
    font-size:${FONT_SIZES.nuetta};
`
const Contact = styled.h3`
   color:${COLORS.grey[300]};
   font-weight:${FONT_WEIGHTS.regular};
   font-size:${FONT_SIZES.nuetta};
`
const Site = styled.h3`
   color:${COLORS.grey[300]};
   font-weight:${FONT_WEIGHTS.bold};
   font-size:${FONT_SIZES.nuetta};
`
const Copyright = styled.h6`
    color:${COLORS.grey[300]};
   font-weight:${FONT_WEIGHTS.semiBold};
   font-size:${FONT_SIZES.nuetta};
   text-align: center;
`

export default Footer
