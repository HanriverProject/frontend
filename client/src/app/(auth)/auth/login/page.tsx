import NaverIcon from '@/assets/icons/NaverIcon';
import KakaoIcon from '@/assets/icons/KakaoIcon';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { FC } from 'react';
import GoogleIcon from '@/assets/icons/GoogleIcon';
import FbLoginIcon from '@/assets/icons/FbLoginIcon';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-80">
      <form action={'POST'} className="flex flex-col">
        <input
          type="text"
          placeholder="아이디"
          className="py-3 px-4 border border-slate-lightgrey rounded-t-md bg-white"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="py-3 px-4 border border-slate-lightgrey bg-white"
        />
        <div className="py-3 px-4 border border-slate-lightgrey rounded-b-md bg-accent-lightblue">
          <input type="checkbox" />
          <label> 로그인 상태유지</label>
        </div>
        <Button
          className="mt-[10px] py-3 px-4"
          variant={'blue'}
          label={'로그인'}
        />
        <div className="flex justify-center items-center w-full mt-[20px] mb-[40px] g-4 text-sm">
          <Link href="#" className="px-4">
            아이디 찾기
          </Link>
          <div className="w-[1px] h-[12px] border border-slate-lightgrey"></div>
          <Link href="#" className="px-4">
            비밀번호 찾기
          </Link>
          <div className="w-[1px] h-[12px] border border-slate-lightgrey"></div>
          <Link href="#" className="px-4">
            회원가입
          </Link>
        </div>
        <div className="w-full h-[1px] border border-slate-lightgrey"></div>
        <div className="flex justify-center items-center mt-[40px] gap-4">
          <Button>
            <NaverIcon />
          </Button>
          <Button className="w-[56px] h-[56px] bg-kakao-bg rounded-[100%]">
            <KakaoIcon />
          </Button>
          <Button className="w-[56px] h-[56px] border border-slate-lightwhite bg-white rounded-[100%]">
            <GoogleIcon />
          </Button>
          <Button className="w-[56px] h-[56px] border rounded-[100%] bg-fb-bg">
            <FbLoginIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
