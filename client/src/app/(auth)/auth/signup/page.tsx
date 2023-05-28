import Button from '@/components/ui/Button';
import Link from 'next/link';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Button variant={'blue'} size={'wlg'} label={'회원가입'} />
      <div className="flex justify-center items-center p-4">
        <p>
          <Link href="/auth/login">이미 회원이신가요?</Link>
        </p>
      </div>
    </div>
  );
};

export default page;
