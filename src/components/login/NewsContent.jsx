import { NewsHeader } from "@components/login/NewsHeader";
import { NewsItem } from "@components/login/NewsItem";
import { NewsList } from "@components/login/NewsList";
import { MainBg } from "@components/MainBg";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export const NewsContent = ({ data = {} }) => {
  const [selected, setSelected] = useState(null);
  const dataSection = data.newsSection || [];

  return (
    <div className="order-2 w-full lg:order-1">
      <div className="fixed inset-0 top-0 left-0 lg:right-[26rem]">
        <MainBg />
      </div>
      <div className="relative z-20">
        <NewsHeader />
        <NewsList
          data={dataSection}
          selected={selected}
          setSelected={setSelected}
        />
        <AnimatePresence>
          {selected && (
            <NewsItem
              data={dataSection}
              selected={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
