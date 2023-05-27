import { FC, HTMLAttributes } from 'react';

interface PaddingContainerProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const PaddingContainer: FC<PaddingContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main className={`px-12 ${className}`} {...props}>
      {children}
    </main>
  );
};

export default PaddingContainer;
