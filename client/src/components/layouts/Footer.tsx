import Link from 'next/link';
import { FC } from 'react';
import { FooterIcon, IconSize } from '@/constants/FooterConstants';
import Button from '../ui/Button';
import Image from 'next/image';

interface FooterProps {}
// 아이콘 버튼들 배열화해서 Map으로 관리할지 지금상태 유지할지 고민

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" pt-6 px-12 border-t border-slate-lightgrey mt-6 transition-all duration-300">
      <div className=" flex justify-between items-center md:flex-row flex-col">
        <div className="">
          <p className=" font-medium text-2xl hidden md:flex ">한리버</p>
          <div className=" pt-6 gap-6 flex text-slate-400">
            <span className=" cursor-pointer">이용약관</span>
            <span className=" cursor-pointer">개인정보 처리방침</span>
            <span className=" cursor-pointer">청소년 보호 정책</span>
          </div>
        </div>
        <figure className=" flex gap-2 md:mt-0 mt-4">
          <Button>
            <a href="https://www.facebook.com/" target="_blank">
              <Image
                src={FooterIcon.FaceBookIcon}
                alt={'facebook'}
                width={IconSize}
                height={IconSize}
              />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/orgs/HanriverProject/repositories"
              target="_blank"
            >
              <Image
                src={FooterIcon.GitHubIcon}
                alt={'github'}
                width={IconSize}
                height={IconSize}
              />
            </a>
          </Button>
          <Button>
            <a href="https://www.instagram.com/" target="_blank">
              <Image
                src={FooterIcon.InstaGramIcon}
                alt={'instagram'}
                width={IconSize}
                height={IconSize}
              />
            </a>
          </Button>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
