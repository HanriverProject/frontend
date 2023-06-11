'use client';

import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import CarouselContainer from '@/components/carousel/CarouselContainer';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import { signIn, useSession } from 'next-auth/react';
import Button from '@/components/ui/Button';
import { useEffect } from 'react';
import Card from '@/components/ui/Card';
import CardContainer from '@/components/ui/CardContainer';

export default function Home() {
  const { status } = useSession();

  useEffect(() => {
    console.log(status);
  }, [status]);
  return (
    <>
      <PaddingContainer className=" flex justify-center items-center flex-col">
        <CarouselContainer />
        <CardContainer />
        {status === 'authenticated' ? '로그인성공' : '로그인실패'}
        <Button label="구글로 로그인해보기" onClick={() => signIn('google')} />
      </PaddingContainer>
    </>
  );
}
