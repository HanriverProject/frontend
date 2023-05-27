import Gorani from '../../assets/carousel/gorani.jpg';
import Deepdive from '../../assets/carousel/deepdive.jpg';
import { CarouselVariants } from './Carousel';
import { VariantProps } from 'class-variance-authority';

export interface CarouselDataType
  extends VariantProps<typeof CarouselVariants> {
  imgsrc: typeof Gorani;
  subject: string;
  label: string;
}

export const CarouselData: CarouselDataType[] = [
  {
    imgsrc: Gorani,
    subject: '한국 고라니',
    label:
      '고라니의 유전부터 사회적 이슈까지 고라니의 모든 것을 다룬 생태 전문서',
    variant: 'blue',
  },
  {
    imgsrc: Deepdive,
    subject: '모던 자바스크립트 Deep Dive',
    label: '자바스크립트 코드의 동작 원리와 기본 개념을 다룬 전문서',
    variant: 'green',
  },
  {
    imgsrc: Gorani,
    subject: '한국 고라니',
    label:
      '고라니의 유전부터 사회적 이슈까지 고라니의 모든 것을 다룬 생태 전문서',
    variant: 'orange',
  },
  {
    imgsrc: Deepdive,
    subject: '모던 자바스크립트 Deep Dive',
    label: '자바스크립트 코드의 동작 원리와 기본 개념을 다룬 전문서',
    variant: 'violet',
  },
  {
    imgsrc: Gorani,
    subject: '한국 고라니',
    label:
      '고라니의 유전부터 사회적 이슈까지 고라니의 모든 것을 다룬 생태 전문서',
    variant: 'default',
  },
  {
    imgsrc: Deepdive,
    subject: '모던 자바스크립트 Deep Dive',
    label: '자바스크립트 코드의 동작 원리와 기본 개념을 다룬 전문서',
    variant: 'orange',
  },
];
