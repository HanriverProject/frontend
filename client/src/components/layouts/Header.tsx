'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg';
import search from '@/assets/icons/search.svg';

import { FC, useState } from 'react';
import {
  headerTopLeft,
  headerTopRight,
  headerIconList,
  HeaderTopProps,
  HeaderIconListItemProps,
} from '../../constants/headerConstants';

interface HeaderProps {}

type HeaderListItemProps = {
  filter?: string;
  text: string;
  link: string;
};

const HeaderListItem = ({ filter, text, link }: HeaderListItemProps) => {
  console.log(filter === text);
  return (
    <li>
      <Link href={link}>
        <span
          className={`text-2xl text-slate-lightgrey ${
            filter === text ? 'text-accent-blue' : ''
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

const HeaderIconListItem = ({ icon, alt }: HeaderIconListItemProps) => {
  return (
    <div className="my-0 mx-4">
      <Link href="#">
        <Image src={icon} alt={alt} />
      </Link>
    </div>
  );
};

const filters = headerTopLeft.map((item) => item.text);

const Header: FC<HeaderProps> = ({}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [filter, setFilter] = useState(filters[0]);

  const logoDropShadow = {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  };
  return (
    <header className="flex flex-col w-full">
      <section
        id="header-top"
        className="flex items-center justify-around w-full h-20 border-b border-b-slate-lightgrey md:py-2 md:px-16 md:justify-between"
      >
        <div id="header-top-left">
          <ul className="flex gap-8">
            {headerTopLeft.map((category, index) => (
              <HeaderListItem
                key={index}
                filter={filter}
                text={category.text}
                link={category.link}
              />
            ))}
          </ul>
        </div>

        <div id="header-top-right" className="hidden md:block">
          <ul className="flex gap-8">
            {headerTopRight.map((item, index) => (
              <HeaderListItem key={index} text={item.text} link={item.link} />
            ))}
          </ul>
        </div>
      </section>
      <section
        id="header-bottom"
        className="flex items-center w-full md:py-2 md:px-16"
      >
        <nav className="flex items-center justify-between w-full flex-wrap md:flex-nowrap">
          <div className="flex m-0 mr-auto p-4">
            <Link
              href="/"
              as={'image'}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src={logo}
                width={48}
                height={48}
                style={logoDropShadow}
                alt="Logo Image"
              />
              <div className="hidden font-bold text-4xl lg:block">
                <span className="text-accent-blue">HAN</span>
                RIVER BOOKS
              </div>
            </Link>
          </div>
          <form
            id="header-searchbar"
            className="shrink w-full flex items-start mr-2 p-2 border rounded-2xl border-gray-100 bg-gray-100 md:w-64 order-last md:-order-none"
          >
            <button>
              <Image src={search} width={36} height={36} alt="Search Icon" />
            </button>
            <input
              type="text"
              placeholder="Search something..."
              className="w-full ml-2 bg-transparent"
            />
          </form>
          <div className="flex items-center justify-center">
            {headerIconList.map((item, index) => (
              <HeaderIconListItem
                key={index}
                icon={item.icon}
                alt={item.icon}
              />
            ))}
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
