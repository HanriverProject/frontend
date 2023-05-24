import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg';
import search from '@/assets/icons/search.svg';

import { FC } from 'react';
import {
  headerTopLeft,
  headerTopRight,
  headerIconList,
} from '../../constants/headerCnstants';

interface HeaderProps {}

type HeaderListItemProps = {
  text: string;
};

type HeaderIconListItemProps = {
  icon: string;
  alt: string;
};

const HeaderListItem = ({ text }: HeaderListItemProps) => {
  return (
    <li>
      <Link href="#">
        <span className="text-2xl text-slate-lightgrey">{text}</span>
      </Link>
    </li>
  );
};

const HeaderIconListItem = ({ icon, alt }: HeaderIconListItemProps) => {
  return (
    <li>
      <button>
        <Image src={icon} width={48} height={48} alt={alt} />
      </button>
    </li>
  );
};

const Header: FC<HeaderProps> = ({}) => {
  const logoDropShadow = {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  };
  return (
    <header className="flex flex-col w-full">
      <section
        id="header-top"
        className="flex items-center justify-between w-full h-20 py-2 px-16 border-b border-b-slate-lightgrey"
      >
        <div id="header-top-left">
          <ul className="flex gap-8">
            {headerTopLeft.map((category, index) => (
              <HeaderListItem key={index} text={category} />
            ))}
          </ul>
        </div>

        <div id="header-top-right">
          <ul className="flex gap-8">
            {headerTopRight.map((text, index) => (
              <li key={index}>
                <Link href="#">
                  <span className="text-2xl text-slate-lightgrey">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="header-bottom"
        className="flex items-center w-full py-8 px-20 justify-between"
      >
        <Link href="/" as={'image'}>
          <div id="header-bottom-left" className="flex items-center gap-2">
            <Image
              src={logo}
              width={64}
              height={64}
              style={logoDropShadow}
              alt="Logo Image"
            />
            <div className="font-bold text-4xl">
              <span className="text-accent-blue">HAN</span>
              RIVER BOOKS
            </div>
          </div>
        </Link>
        <div
          id="header-bottom-right"
          className="flex itmes-center justify-between gap-8 w-3/10 "
        >
          <div
            id="header-searchbar"
            className="flex items-center p-2 border rounded-2xl border-gray-100 bg-gray-100"
          >
            <button>
              <Image src={search} width={36} height={36} alt="Search Icon" />
            </button>
            <input
              type="text"
              placeholder="Search something..."
              className="w-80 ml-2 bg-transparent"
            />
          </div>
          <div className="w-full">
            <ul className="flex w-full gap-16">
              {headerIconList.map((item, index) => (
                <HeaderIconListItem
                  key={index}
                  icon={item.icon}
                  alt={item.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
