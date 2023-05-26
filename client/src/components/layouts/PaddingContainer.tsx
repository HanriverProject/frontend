import { FC } from 'react';

interface PaddingContainerProps {
  children: React.ReactNode;
}

const PaddingContainer: FC<PaddingContainerProps> = ({ children }) => {
  return <main className=" px-12">{children}</main>;
};

export default PaddingContainer;
