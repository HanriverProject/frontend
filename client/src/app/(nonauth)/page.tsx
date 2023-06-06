'use client';

import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import CarouselContainer from '@/components/carousel/CarouselContainer';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import { signIn, useSession } from 'next-auth/react';
import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export default function Home() {
  const { status } = useSession();

  useEffect(() => {
    console.log(status);
  }, [status]);
  return (
    <>
      <PaddingContainer className=" flex justify-center items-center flex-col">
        <Paragraph>안녕하세요</Paragraph>
        <LargeHeading>제목</LargeHeading>
        <CarouselContainer />
        {status === 'authenticated' ? '로그인성공' : '로그인실패'}
        <Button label="구글로 로그인해보기" onClick={() => signIn('google')} />
      </PaddingContainer>
    </>
  );
}
