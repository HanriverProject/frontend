import Button from '@/components/ui/Button';
import DarkmodeToggleBtn from '@/components/DarkmodeToggleBtn';
import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import Carousel from '@/components/carousel/Carousel';
import CarouselContainer from '@/components/carousel/CarouselContainer';
import PaddingContainer from '@/components/layouts/PaddingContainer';

export default function Home() {
  return (
    <PaddingContainer className=" flex justify-center items-center flex-col">
      <Paragraph>안녕하세요</Paragraph>
      <LargeHeading>제목</LargeHeading>
      <CarouselContainer />
      <Button variant={'grey'} size={'lg'} label={'Try Again'}></Button>
      <Button variant={'grey'} size={'md'} label={'장바구니'}></Button>
      <Button variant={'blue'} size={'wlg'} label={'회원가입'}></Button>
      <DarkmodeToggleBtn />
    </PaddingContainer>
  );
}
