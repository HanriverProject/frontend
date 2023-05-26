'use client';
import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IconSize } from '@/constants/FooterConstants';

import Image from 'next/image';
import Button from './ui/Button';
import SunIcon from '@/assets/icons/SunIcon.svg';
import MoonIcon from '@/assets/icons/MoonIcon.svg';

interface DarkmodeToggleBtnProps {}

const DarkmodeToggleBtn: FC<DarkmodeToggleBtnProps> = ({}) => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Button>
      {mounted && theme === 'dark' ? (
        <Image
          src={SunIcon}
          alt={'change to light mode button'}
          width={IconSize}
          height={IconSize}
          onClick={() => setTheme('light')}
        />
      ) : (
        <Image
          src={MoonIcon}
          alt={'change to dark mode button'}
          width={IconSize}
          height={IconSize}
          onClick={() => setTheme('dark')}
        />
      )}
    </Button>
  );
};

export default DarkmodeToggleBtn;
