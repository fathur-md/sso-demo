import { NewsCard } from "@components/login/NewsCard";

export const NewsList = ({ data, selected, setSelected }) => {
  return (
    <div className="flex flex-col gap-6 p-4 pb-18 lg:pt-0">
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
