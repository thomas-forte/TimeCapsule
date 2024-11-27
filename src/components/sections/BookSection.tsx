import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
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
        <div className={`card one bg-${decade} bd-${decade}`}>
          <div className={`text-center bf-${decade}`}>Most Popular Novel:</div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {book.title}
          </div>
          <p className={`text-center indent-[5vw] bf-${decade} body mb-[1vw]`}>
            By {book.author}
          </p>
        </div>
        <div className={`card two poster bg-${decade} bd-${decade}`}>
          <img
            src={"https://timecapsule.brendantrepal.com" + book.image}
            alt=""
          />
        </div>
      </Section>
    )
  );
};
