import React from 'react'
import styled from 'styled-components'
import { FONT_SIZES, FONT_WEIGHTS, COLORS } from '../constants'
import Button from './Button'


const HelpYouGrow = ({ image, heading, description, label, tag, obj1, obj2, obj3 }) => {
    return (
        <HelpYouGrowContainer>
            <Wrapper>
                <HelpYou>
                    <ImgHolder>
                        <Img src={image} />
                    </ImgHolder>
                    <HelpYouText>
                        <Tag>{ tag }</Tag>
                        <Header>{heading}</Header>
                        <Description>{description}</Description>
                        {/* {goals.map((goal, i) => (
                            <li id={i}>{goal.obj}</li>
                        ))} */}
                        <li>{obj1}</li>
                        <li>{obj2}</li>
                        <li>{obj3}</li>
                        <Button text={label} />
                    </HelpYouText>
                </HelpYou>


            </Wrapper>
        </HelpYouGrowContainer>
    )
}

const HelpYouGrowContainer = styled.section`
    position: relative;
    /* margin-top: 100vh; */
    height: 100vh;
`
const Wrapper = styled.div`
    /* width: 75%; */
    margin: 0 auto;
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
export default HelpYouGrow
