import FaceBookIcon from '@/assets/icons/FaceBookIcon';
import GitHubIcon from '@/assets/icons/GitHubIcon';
import InstaGramIcon from '@/assets/icons/InstaGramIcon';
import Link from 'next/link';
import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" pt-6 px-12 border-t border-slate-lightgrey mt-6">
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
          <a href="https://www.facebook.com/" target="_blank">
            <FaceBookIcon className=" cursor-pointer" />
          </a>
          <a
            href="https://github.com/orgs/HanriverProject/repositories"
            target="_blank"
          >
            <GitHubIcon className=" cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstaGramIcon className=" cursor-pointer" />
          </a>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
