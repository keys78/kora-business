import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss'

import logo1 from '../assets/images/customer-logo-1.png'
import logo2 from '../assets/images/customer-logo-2.png'
import logo3 from '../assets/images/customer-logo-3.png'
import logo4 from '../assets/images/customer-logo-4.png'
import logo5 from '../assets/images/customer-logo-5.png'
import logo6 from '../assets/images/customer-logo-6.png'


SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const Swipe = () => {
    const [logos] = useState([
        { img: logo1, },
        { img: logo2, },
        { img: logo3, },
        { img: logo4, },
        { img: logo5, },
        { img: logo6, },
    ])

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={4}
            autoplay={{
                "delay": 4000,
                "disableOnInteraction": false
            }}
        >

            {(logos.map((logo) => (
                <SwiperSlide key={logo.img}>
                    <Img src={logo.img} />
                </SwiperSlide>
            )))}

        </Swiper>


    );
}

const Img = styled.img`
    height: 20px;
    width: 30px;
`

export default Swipe;