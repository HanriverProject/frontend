'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import { CarouselDataType } from './CarouselData';
import LargeHeading from '../ui/LargeHeading';
import Paragraph from '../ui/Paragraph';
import Image from 'next/image';

export const CarouselVariants = cva(
  `
   w-[20rem] h-[9.5rem] 
   md:w-[25vw] md:h-[15rem]
   lg:w-[30rem]
   
   transition-all duration-300
   p-2 md:pt-4 mx-4
   rounded-lg
   flex justify-center items-center m-auto

   `,
  {
    variants: {
      variant: {
        blue: 'bg-accent-blue',
        orange: 'bg-orange-600',
        green: 'bg-green-600',
        gray: 'bg-gray-600',
        violet: 'bg-violet-600',
        default: 'bg-amber-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface CarouselProps
  extends HTMLAttributes<HTMLElement>,
    CarouselDataType,
    VariantProps<typeof CarouselVariants> {}

const Carousel: FC<CarouselProps> = ({
  variant,
  imgsrc,
  subject,
  label,
  ...props
}) => {
  return (
    <figure className={cn(CarouselVariants({ variant }))} {...props}>
      <div className=" p-1">
        <LargeHeading
          className=" text-slate-200 opacity-90 mb-1 mt-1 md:mb-4 "
          size="sm"
        >
          {subject}
        </LargeHeading>
        <Paragraph size={'sm'} className=" text-slate-200 opacity-75">
          {label}
        </Paragraph>
      </div>
      <Image
        src={imgsrc}
        alt={subject}
        width={200}
        height={150}
        sizes={'(max-width:768px) 100px, 150px'}
        className=" my-auto mx-auto rounded-lg hidden lg:flex"
      />
    </figure>
  );
};

export default Carousel;
