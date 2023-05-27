'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import LargeHeading from '../ui/LargeHeading';
import Paragraph from '../ui/Paragraph';

const CarouselVariants = cva(
  `
   w-[20rem] h-[9.5rem] 
   md:w-[30rem] md:h-[15rem]
   xl:w-[41.875rem] xl:h-[18.75rem]
   transition-all duration-300
   p-6 mx-4
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
    VariantProps<typeof CarouselVariants> {
  imgsrc?: string;
  title: string;
  label: string;
}

const Carousel: FC<CarouselProps> = ({
  variant,
  imgsrc,
  title,
  label,
  ...props
}) => {
  return (
    <figure className={cn(CarouselVariants({ variant }))} {...props}>
      <div className=" my-auto">
        <LargeHeading className=" text-slate-200 opacity-90 mb-4" size="sm">
          {title}
        </LargeHeading>
        <Paragraph size={'sm'} className=" text-slate-200 opacity-75">
          {label}
        </Paragraph>
      </div>
      <div className=" my-auto mx-auto">더미이미지</div>
    </figure>
  );
};

export default Carousel;
