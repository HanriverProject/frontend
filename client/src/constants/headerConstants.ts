import cart from '@/assets/icons/cart.svg';
import mypage from '@/assets/icons/mypage.svg';
import notify from '@/assets/icons/notify.svg';

export type HeaderTopProps = {
  text: string;
  link: string;
};

export type HeaderIconListItemProps = {
  icon: any;
  alt: string;
};

export const headerTopLeft = [
  { text: '국내도서', link: '#' },
  { text: '해외도서', link: '#' },
  { text: 'eBook', link: '#' },
];
export const headerTopRight: HeaderTopProps[] = [
  { text: '회원가입', link: '/auth/signup' },
  { text: '로그인', link: '/auth/login' },
];
export const headerIconList = [
  { icon: notify, text: '알림', alt: 'Notification Icon', link: '#' },
  { icon: cart, text: '장바구니', alt: 'Cart Icon', link: '#' },
  { icon: mypage, text: '마이페이지', alt: 'MyPage Icon', link: '#' },
];
