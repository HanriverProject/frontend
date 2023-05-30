'use client';
import { FC } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col min-h-screen select-none text-gray-700 transition-colors duration-300 dark:bg-slate-deepdark dark:text-gray-200">
          {children}
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
