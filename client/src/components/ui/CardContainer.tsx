import Card from './Card';

interface CardContainerProps {}

const CardContainer = ({}: CardContainerProps) => {
  return (
    <section className=" w-[1440px]">
      <h2 className=" font-semibold mb-4 text-2xl text-slate-600 dark:text-slate-200">
        Content Title Lorem Ipsum
      </h2>
      <div className=" flex gap-4 overflow-x-scroll">
        {Array.from({ length: 20 }).map((item, idx) => (
          <Card key={`card${idx}`} />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
