'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg';
import search from '@/assets/icons/search.svg';
import HamBugerIcon from '@/assets/icons/HamBugerIcon';
import Button from '../ui/Button';
import DarkmodeToggleBtn from '@/components/DarkmodeToggleBtn';

import { FC, useState } from 'react';
import {
  headerTopLeft,
  headerTopRight,
  headerIconList,
  HeaderIconListItemProps,
} from '../../constants/headerConstants';

interface HeaderProps {}

type HeaderListItemProps = {
  filter?: string;
  text: string;
  link: string;
  handleFilter: (filter: string) => void;
};

const HeaderListItem = ({
  filter,
  text,
  link,
  handleFilter,
}: HeaderListItemProps) => {
  return (
    <li onClick={() => handleFilter(text)}>
      <Link href={link}>
        <span
          className={`text-md ${
            filter === text ? 'text-accent-blue' : 'text-slate-lightgrey'
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
        <Image width={32} height={32} src={icon} alt={alt} />
      </Link>
    </div>
  );
};

const filters = headerTopLeft.map((item) => item.text);

const Header: FC<HeaderProps> = ({}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [filter, setFilter] = useState(filters[0]);

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  const logoDropShadow = {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  };

  return (
    <header className="flex flex-col w-full">
      <section
        id="header-top"
        className="flex items-center justify-around w-full h-10 border-b border-b-slate-lightgrey md:py-2 md:px-16 md:justify-between"
      >
        <div id="header-top-left">
          <ul className="flex gap-8">
            {headerTopLeft.map((category, index) => (
              <HeaderListItem
                key={index}
                filter={filter}
                text={category.text}
                link={category.link}
                handleFilter={handleFilter}
              />
            ))}
          </ul>
        </div>

        <div id="header-top-right" className="hidden md:block">
          <ul className="flex gap-8">
            {headerTopRight.map((item, index) => (
              <HeaderListItem
                key={index}
                text={item.text}
                link={item.link}
                handleFilter={() => {}}
              />
            ))}
          </ul>
        </div>
      </section>
      <section
        id="header-bottom"
        className="flex items-center w-full mb-4 md:py-2 md:px-16"
      >
        <nav className="flex items-center justify-between w-full flex-wrap md:flex-nowrap">
          <div className="flex m-0 mr-auto p-4">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                width={48}
                height={48}
                style={logoDropShadow}
                alt="Logo Image"
              />
              <div className="hidden font-bold text-2xl lg:block">
                <span className="text-accent-blue">HAN</span>
                RIVER BOOKS
              </div>
            </Link>
          </div>
          <form
            id="header-searchbar"
            className="shrink w-full flex items-start my-0 mx-2 p-2 border rounded-2xl border-gray-100 bg-gray-100 md:w-64 order-last md:-order-none"
          >
            <button>
              <Image src={search} width={24} height={24} alt="Search Icon" />
            </button>
            <input
              type="text"
              placeholder="Search something..."
              className="w-full ml-2 bg-transparent"
            />
          </form>
          <div className="flex">
            <DarkmodeToggleBtn />
            <div className="hidden items-center justify-center md:flex">
              {headerIconList.map((item, index) => (
                <HeaderIconListItem
                  key={index}
                  icon={item.icon}
                  alt={item.icon}
                />
              ))}
            </div>
            <div className="block p-4 relative md:hidden">
              {isLogin ? (
                <Menu />
              ) : (
                <Link href="/auth/login">
                  <Button
                    className="text-slate-950 font-bold text-sm border border-slate-lightgrey rounded-xl px-2
              py-1"
                    label={'로그인'}
                  />
                </Link>
              )}
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <HamBugerIcon />
      </Button>
      {isOpen && (
        <div className="absolute top-16 right-0 w-64 border border-slate-950 rounded-xl drop-shadow-xl bg-white">
          <ul className="flex flex-col">
            {headerIconList.map((item, index) => (
              <li
                key={index}
                className="px-2.5 py-3 border-b-[1px] text-center border-slate-950 last:border-b-[0px]"
              >
                <Link
                  href={item.link}
                  className="flex justify-center items-center my-0 mx-[30px]"
                >
                  <Image
                    src={item.icon}
                    width={28}
                    height={28}
                    alt={item.alt}
                    style={{ marginRight: '10px' }}
                  />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
