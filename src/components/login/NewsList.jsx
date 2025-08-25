import { NewsCard } from "@components/login/NewsCard";

export const NewsList = ({ data, selected, setSelected }) => {
  return (
    <div className="flex flex-col gap-6 p-4 pb-18 lg:pt-0">
      <div className="fixed bottom-0 left-0 z-50 hidden h-12 w-full bg-blue-900 lg:block"></div>
      {data.map((card) => (
        <NewsCard
          key={card.title}
          card={card}
          isSelected={card.title === selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};
