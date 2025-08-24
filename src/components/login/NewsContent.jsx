import { NewsHeader } from "@components/login/NewsHeader";
import { NewsItem } from "@components/login/old/NewsItem";
import { NewsList } from "@components/login/old/NewsList";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export const NewsContent = ({ data }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="order-2 w-full lg:order-1">
      <NewsHeader />

      <NewsList
        data={data?.newsSection}
        selected={selected}
        onSelect={setSelected}
      />

      <AnimatePresence>
        {selected && (
          <NewsItem
            id={selected}
            key="item"
            data={data.newsSection}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
