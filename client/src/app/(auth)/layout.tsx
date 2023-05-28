import AuthHeader from '@/components/layouts/AuthHeader';
import PaddingContainer from '@/components/layouts/PaddingContainer';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthHeader />
      <PaddingContainer className=" flex justify-center items-center flex-col">
        {children}
      </PaddingContainer>
    </>
  );
}
