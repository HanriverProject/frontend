import Button from '@/components/ui/Button';
import DarkmodeToggleBtn from '@/components/DarkmodeToggleBtn';

export default function Home() {
  return (
    <main>
      <Button variant={'grey'} size={'lg'} label={'Try Again'}></Button>
      <Button variant={'grey'} size={'md'} label={'장바구니'}></Button>
      <Button variant={'blue'} size={'wlg'} label={'회원가입'}></Button>

      <DarkmodeToggleBtn />
    </main>
  );
}
