'use client';
import { FC } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface CarouselContainerProps {}

const CarouselContainer: FC<CarouselContainerProps> = ({}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={2}
      className={`
        w-[40rem] h-[10rem] md:w-[61rem] md:h-[15rem] xl:w-[90rem] xl:h-[20rem] my-6
       `}
    >
      <SwiperSlide>
        <Carousel title={'하이'} label={'용'} />
      </SwiperSlide>
      <SwiperSlide>
        <Carousel title={'하이'} label={'용'} />
      </SwiperSlide>
      <SwiperSlide>
        <Carousel title={'하이'} label={'용'} />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselContainer;
