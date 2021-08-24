import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants'

const Features = () => {
    return (
        <FeaturesContainer>
            <Wrapper>
                <TextHolder>
                    <Heading>Check out all the features</Heading>
                    <Description>
                        The features built into Kora were designed to help online
                        shop owners present their merchandise and find more customers</Description>
                </TextHolder>
            </Wrapper>
        </FeaturesContainer>
    )
}

const FeaturesContainer = styled.section`
    background: ${COLORS.darkBlue[300]};
    width: 100%;
`

export default Features
