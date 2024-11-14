import { useEffect, useState } from "react";

import { Card } from "./Card";
import novels from "../../assets/novels.json";

interface BookCardProps {
  date: Date;
  decade: string;
}

type Book = {
  author: string;
  image: string;
  title: string;
};

export const BookCard = ({ date, decade }: BookCardProps) => {
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

  return book ? (
    <Card decade={decade}>
      <div className={`text-center bf-${decade}`}>Most Popular Novel:</div>
      <div className={`text-center my-[1vw] hf-${decade}`}>{book.title}</div>
      <p className={`text-center indent-[5vw] bf-${decade} body mb-[1vw]`}>
        By {book.author}
      </p>
      <img
        className="book-cover"
        src={"https://timecapsule.brendantrepal.com" + book.image}
        alt="book cover"
      />
    </Card>
  ) : (
    <></>
  );
};
