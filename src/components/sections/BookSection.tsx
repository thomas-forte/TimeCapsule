import { useEffect, useState } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "./Section";
import novels from "../../assets/novels.json";

import styles from "./Section.module.css";

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
        <div
          className={classNames(
            "card",
            styles.movieOne,
            decade ? `bg-${decade} bd-${decade}` : "bg-yellow-300"
          )}
        >
          <div className={`text-center bf-${decade}`}>Most Popular Novel:</div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {book.title}
          </div>
          <p className={`text-center indent-[5vw] bf-${decade} body mb-[1vw]`}>
            By {book.author}
          </p>
        </div>
        <div
          className={classNames(
            "card",
            styles.movieTwo,
            decade ? `bg-${decade} bd-${decade}` : "bg-yellow-300"
          )}
        >
          <img
            className={styles.moviePoster}
            src={"https://timecapsule.brendantrepal.com" + book.image}
            alt=""
          />
        </div>
      </Section>
    )
  );
};
