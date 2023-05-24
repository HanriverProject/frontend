import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from '@/assets/logo.svg';
import search from '@/assets/icons/search.svg';
import cart from '@/assets/icons/cart.svg';
import mypage from '@/assets/icons/mypage.svg';
import notify from '@/assets/icons/notify.svg';

interface HeaderProps {}

const categorys = ['국내도서', '해외도서', 'eBook'];
const headerTopRight = ['회원가입', '로그인'];

type HeaderListItemProps = {
  text: string;
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
            {categorys.map((category, index) => (
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
              <li>
                <button>
                  <Image
                    src={notify}
                    width={48}
                    height={48}
                    alt="Notify Icon"
                  />
                </button>
              </li>
              <li>
                <button>
                  <Image src={cart} width={48} height={48} alt="Cart Icon" />
                </button>
              </li>
              <li>
                <button>
                  <Image
                    src={mypage}
                    width={48}
                    height={48}
                    alt="MyPage Icon"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
