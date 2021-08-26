import React from 'react'
import { introduction } from '../components/data'
import Features from '../components/Features'
import Footer from '../components/Footer'
import HelpYouGrow from '../components/HelpYouGrow'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Steps from '../components/Steps'
import Subscribe from '../components/Subscribe'
import Testimonial from '../components/Testimonial'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <HelpYouGrow {...introduction}/>
            <Features />
            <Steps />
            <Testimonial />
            <Subscribe />
            <Footer />
            
        </>
    )
}

export default Home
