'use client';

import { FC } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselData } from './CarouselData';
import Carousel from './Carousel';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

interface CarouselContainerProps {}

const CarouselContainer: FC<CarouselContainerProps> = ({}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      rewind={true}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      className={`
      max-w-[1440px] h-[15rem] w-[100vw]
       `}
      breakpoints={{
        976: {
          slidesPerView: 2,
        },
      }}
    >
      {CarouselData.map((carouselItem, idx) => (
        <SwiperSlide key={`carousel${idx}`}>
          <Carousel
            imgsrc={carouselItem.imgsrc}
            subject={carouselItem.subject}
            label={carouselItem.label}
            variant={carouselItem.variant}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselContainer;
