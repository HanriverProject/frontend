import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg';

export default function AuthHeader() {
  const logoDropShadow = {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  };

  return (
    <header className="flex justify-center items-center py-6 px-12 border-b">
      <div>
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
    </header>
  );
}
