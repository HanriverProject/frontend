import Header from '@/components/layouts/Header';
import PaddingContainer from '@/components/layouts/PaddingContainer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PaddingContainer className=" flex justify-center items-center flex-col">
        {children}
      </PaddingContainer>
    </>
  );
}
