import React from 'react'
import styled from 'styled-components'
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BREAKPOINTS } from '../constants'
import { analyzeMarket, createAccount, stepInfo, whatToSell } from './data'
import heroBg from '../assets/images/details-1-background.png'
import DataSpread from './DataSpread'

const Steps = () => {
    return (
        <div>
            <StepsContainer id="details">
                <StepsWrapper>
                        <Heading>{ stepInfo.heading }</Heading>
                        <Description>{ stepInfo.description }</Description>

                        <Holder>
                            <DataSpread {...whatToSell}/>
                            <DataSpread {...analyzeMarket}/>
                            <DataSpread {...createAccount} />
                        </Holder>

                </StepsWrapper>
            </StepsContainer>
        </div>
    )
}

const StepsContainer = styled.section`
    margin-top: -30px;
    background-image: url(${heroBg});
`
const StepsWrapper = styled.div`
    width: 75%; 
    margin: 0 auto;
    padding: 6rem 0;
`

const Heading = styled.h1`
    font-size: ${FONT_SIZES.l};
    font-weight: ${FONT_WEIGHTS.bold};
    color: ${COLORS.darkBlue[300]};
    line-height: 2.3rem;
    width: 60%;
`
const Description = styled.p`
    font-size: ${FONT_SIZES.xs};
    font-weight: ${FONT_WEIGHTS.regular};
    color: ${COLORS.grey[300]};
    margin: 1.5rem 0;
    width: 70%;
    
`

const Holder = styled.div`

`

export default Steps
