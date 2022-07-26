import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Slider.css';
import shiopping1 from '../../assets/shopping_images/shiopping1.jpg'
import shiopping2 from '../../assets/shopping_images/shiopping2.jpg'
import shiopping3 from '../../assets/shopping_images/shiopping3.jpg'
import shiopping4 from '../../assets/shopping_images/shiopping4.jpg'
import shiopping5 from '../../assets/shopping_images/shiopping5.jpg'

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      className='swiper-main-container swiper-slide'
    >
      <SwiperSlide className=''>
        <img className='slider-image' src={shiopping1} alt='Slider Car' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slider-image' src={shiopping2} alt='Slider Car' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slider-image' src={shiopping3} alt='Slider Car' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slider-image' src={shiopping4} alt='Slider Car' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slider-image' src={shiopping5} alt='Slider Car' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;