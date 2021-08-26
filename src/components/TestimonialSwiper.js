import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss'

import blake from '../assets/images/testimonial-1.jpg'
import nicolas from '../assets/images/testimonial-2.jpg'
import samantha from '../assets/images/testimonial-3.jpg'
import mary from '../assets/images/testimonial-4.jpg'
import mike from '../assets/images/testimonial-5.jpg'
import vanya from '../assets/images/testimonial-6.jpg'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../constants';


SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const TestimonialSwiper = () => {
    const [testimonials] = useState([
        {
            img: samantha,
            text: 'I am happy to have chosen Blink for our shop implementation. Their specialized experience helped the project and made it available 2 weeks prior the launch date for extensive testing.',
            author: 'Samantha Bloom',
            occupation: 'Team Leader - Syncnow',
        },

        {
            img: nicolas,
            text: 'Totally recommended. I am happy to have chosen Blink for our shop implementation. Their great specialized experience helped the project and made it available 2 weeks prior the launch.',
            author: 'Nicolas Ritcher',
            occupation: 'Manager - FirstUp',
        },
        {
            img: mary,
            text: 'I am happy to have chosen Blink for our shop implementation. Their specialized experience helped the project and made it available 2 weeks prior the launch date for extensive testing.',
            author: 'Mary Longhorn',
            occupation: 'Designer - Firstdev',
        },
        {
            img: mike,
            text: 'Totally recommended. I am happy to have chosen Blink for our shop implementation. Their great specialized experience helped the project and made it available 2 weeks prior the launch.',
            author: 'Mike Page',
            occupation: 'Developer - ChainLink',
        },
        {
            img: blake,
            text: 'I am happy to have chosen Blink for our shop implementation. Their specialized experience helped the project and made it available 2 weeks prior the launch date for extensive testing.',
            author: 'Susanne Blake',
            occupation: 'Operations - Launchday',
        },
        {
            img: vanya,
            text: 'Totally recommended. I am happy to have chosen Blink for our shop implementation. Their great specialized experience helped the project and made it available 2 weeks prior the launch.',
            author: 'Vanya Dropper',
            occupation: 'Marketer - Flinco',
        },

    ])

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            navigation
            autoplay={{
                "delay": 5000,
                "disableOnInteraction": false
            }}
        >
            <TestimonialSwiperContainer>
                {(testimonials.map((testimonial, i) => (
                    <SwiperSlide key={i}>
                        <SingleTestimonial>
                            <Comment>{testimonial.text}</Comment>
                            <Divide>
                                <Img src={testimonial.img} />
                                <div>
                                    <Author>{testimonial.author}</Author>
                                    <Occupation>{testimonial.occupation}</Occupation>
                                </div>
                            </Divide>
                        </SingleTestimonial>
                    </SwiperSlide>
                )))}
            </TestimonialSwiperContainer>
        </Swiper>


    );
}

const TestimonialSwiperContainer = styled.div`
    margin:0 auto;
`
const SingleTestimonial = styled.div`
    height: 30vh;
    background: ${COLORS.white};
    padding: 2rem 2rem;
    border-radius: 20px;
    margin:0 3rem;
`
const Divide = styled.div`
    display: flex;
    align-items: center;
    gap:2rem;
`

const Comment = styled.p`
    font-size: ${FONT_SIZES.xs};
    font-weight: ${FONT_WEIGHTS.regular};
    color: ${COLORS.grey[300]};
    font-style: italic;
`
const Author = styled.h1`
    font-size: ${FONT_SIZES.s};
    font-weight: ${FONT_WEIGHTS.semiBold};
    color: ${COLORS.black};
    line-height: 0px;
`
const Occupation = styled.h2`
    font-size: ${FONT_SIZES.xxs};
    font-weight: ${FONT_WEIGHTS.regular};
    color: ${COLORS.grey[300]};
`

const Img = styled.img`
   border-radius: 999999px;
   height:80px ;
   width: 20% !important;
`

export default TestimonialSwiper;