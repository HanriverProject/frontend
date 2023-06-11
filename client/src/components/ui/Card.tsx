import Image from 'next/image';
import Gorani from '../../assets/carousel/gorani.jpg';
import Paragraph from './Paragraph';

interface CardProps {}

const Card = ({}: CardProps) => {
  return (
    <figure className=" flex flex-col flex-shrink-0">
      <Image
        className=" rounded-md"
        src={Gorani}
        alt={'카드이미지'}
        width={120}
        height={200}
      />
      <p className=" text-[1.125rem] font-semibold pt-2">한국고라니</p>
      <p className=" opacity-75 text-[0.875rem]">Lolem Ipsum</p>
    </figure>
  );
};

export default Card;
