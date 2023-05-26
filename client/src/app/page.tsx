import Button from '@/components/ui/Button';
import MoonIcon from '@/assets/icons/MoonIcon';

export default function Home() {
  return (
    <main className="flex-1">
      <Button variant={'grey'} size={'lg'} label={'Try Again'}></Button>
      <Button variant={'grey'} size={'md'} label={'장바구니'}></Button>
      <Button variant={'blue'} size={'wlg'} label={'회원가입'}></Button>
      <Button>
        <MoonIcon />
      </Button>
    </main>
  );
}
