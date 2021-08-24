import React from 'react'
import { introduction } from '../components/data'
import Features from '../components/Features'
import HelpYouGrow from '../components/HelpYouGrow'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <HelpYouGrow {...introduction}/>
            <Features />
            
        </>
    )
}

export default Home
