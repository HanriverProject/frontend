import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import CarouselContainer from '@/components/carousel/CarouselContainer';
import PaddingContainer from '@/components/layouts/PaddingContainer';

export default function Home() {
  return (
    <>
      <PaddingContainer className=" flex justify-center items-center flex-col">
        <Paragraph>안녕하세요</Paragraph>
        <LargeHeading>제목</LargeHeading>
        <CarouselContainer />
      </PaddingContainer>
    </>
  );
}
