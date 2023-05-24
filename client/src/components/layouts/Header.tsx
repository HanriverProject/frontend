import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from '@/assets/logo.svg';
import search from '@/assets/icons/search.svg';
import cart from '@/assets/icons/cart.svg';
import mypage from '@/assets/icons/mypage.svg';
import notify from '@/assets/icons/notify.svg';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex flex-col w-full">
      <section
        id="header-top"
        className="flex items-center justify-between w-full h-20 py-2 px-16 border-b border-b-gray-400"
      >
        <div id="header-top-left">
          <ul className="flex gap-3">
            <li>
              <Link href="#">국내도서</Link>
            </li>
            <li>
              <Link href="#">해외도서</Link>
            </li>
            <li>
              <Link href="#">eBook</Link>
            </li>
          </ul>
        </div>

        <div id="header-top-right">
          <ul className="flex gap-3">
            <li>
              <Link href="#">회원가입</Link>
            </li>
            <li>
              <Link href="#">로그인</Link>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="header-bottom"
        className="flex items-center w-full h-20 py-2 px-20 justify-between"
      >
        <div id="header-bottom-left" className="flex items-center gap-2">
          <Image src={logo} width={64} height={64} alt="Logo Image" />
          <h2>HANRIVER BOOKS</h2>
        </div>
        <div id="header-bottom-right" className="flex itmes-center gap-8">
          <div id="header-searchbar">
            <button>
              <Image src={search} width={36} height={36} alt="Search Icon" />
            </button>
            <input type="text" placeholder="Search something..." />
          </div>
          <div>
            <ul className="flex justify-evenly">
              <li>
                <button>
                  <Image
                    src={notify}
                    width={48}
                    height={48}
                    alt="Notify Icon"
                  />
                </button>
                <button>
                  <Image src={cart} width={48} height={48} alt="Cart Icon" />
                </button>
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
