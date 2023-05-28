'use client';
import { FC } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen select-none text-gray-700 transition-colors duration-300 dark:bg-slate-deepdark dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
