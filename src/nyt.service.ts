import axios from "axios";

export interface Doc {
  _id: number;
  abstract: string;
  // byline: {},
  document_type: string;
  headline: {
    main: string;
    print_headline: string;
  };
  // keywords
  lead_paragraph: string;
  // multimedia
  // news_desk
  print_page: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
}
interface NYT_ARTICLES_RESPONSE {
  copyright: string;
  status: string;
  response: {
    docs: Doc[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

export const getSomeHeadlines = async (date: Date): Promise<Doc[] | string> => {
  const formattedDate = date.toISOString().substring(0, 10).replace(/-/g, "");
  return await axios
    .get<NYT_ARTICLES_RESPONSE>(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      {
        params: {
          "api-key": "anAU8Yk0RQpGTel7ZLCurFyigefJRTo3",
          fq: "The New York Times",
          begin_date: formattedDate,
          end_date: formattedDate,
          sort: "newest",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        return response.data.response.docs;
      } else {
        return "problem";
      }
    })
    .catch(() => {
      return "big problem";
    });
};

export interface Book {
  age_group: string;
  author: string;
  contributor: string;
  contributor_note: string;
  created_date: string;
  description: string;
  price: number;
  primary_isbn13: string;
  primary_isbn10: string;
  publisher: string;
  rank: number;
  title: string;
  updated_date: string;
}
interface List {
  list_id: number;
  list_name: string;
  display_name: string;
  updated: string;
  list_image: string;
  books: Book[];
}
interface NYT_BOOKS_RESPONSE {
  copyright: string;
  status: string;
  num_results: number;
  results: {
    bestsellers_date: string;
    published_date: string;
    lists: List[];
  };
}

export const getBestBooks = async (date: Date): Promise<string> => {
  const formattedDate = date.toISOString().substring(0, 10);
  return await axios
    .get<NYT_BOOKS_RESPONSE>(
      `https://api.nytimes.com/svc/books/v3/lists/overview.json`,
      {
        params: {
          "api-key": "anAU8Yk0RQpGTel7ZLCurFyigefJRTo3",
          published_date: formattedDate,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        console.log(response.data);
        return "yes";
      } else {
        return "problem";
      }
    })
    .catch(() => {
      return "big problem";
    });
};
