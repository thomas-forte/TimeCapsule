import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { config } from "../../config";
import novels from "../../assets/novels.json";

type Book = {
  author: string;
  image: string;
  title: string;
};

export const BookSection = ({ date, decade }: SectionProps) => {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    try {
      const book = (novels as { [key: string]: Book })[
        date.getFullYear().toString()
      ];
      setBook(book);
    } catch {
      setBook(null);
    }
  }, [date]);

  return (
    book && (
      <Section>
        <Card decade={decade} className="w-2/5">
          <div className="text-center">Most Popular Novel:</div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {book.title}
          </div>
          <p className="text-center body mb-[1vw]">By {book.author}</p>
        </Card>
        <Card decade={decade} className="poster">
          <img
            src={config.assetsRoot + book.image}
            alt={`${book.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
