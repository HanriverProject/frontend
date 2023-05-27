import cart from '@/assets/icons/cart.svg';
import mypage from '@/assets/icons/mypage.svg';
import notify from '@/assets/icons/notify.svg';

export type HeaderTopProps = {
  text: string;
  link: string;
};

export const headerTopLeft: HeaderTopProps[] = [
  { text: '국내도서', link: '#' },
  { text: '해외도서', link: '#' },
  { text: 'eBook', link: '#' },
];
export const headerTopRight: HeaderTopProps[] = [
  { text: '회원가입', link: '/auth/signup' },
  { text: '로그인', link: '/auth/login' },
];
export const headerIconList = [
  { icon: notify, alt: 'Notification Icon' },
  { icon: cart, alt: 'Cart Icon' },
  { icon: mypage, alt: 'MyPage Icon' },
];
