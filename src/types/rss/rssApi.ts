export interface Feed {
  items: Item[];
  feedUrl?: string;
  image?: Image;
  paginationLinks?: PaginationLinks;
  title: string;
  description: string;
  generator: string;
  link: string;
  copyright?: string;
  lastBuildDate?: string;
  docs?: string;
  pubDate?: string;
  language?: string;
}

export interface Item {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
  "content:encoded"?: string;
  "content:encodedSnippet"?: string;
  creator?: string;
  author?: string;
  categories?: string[];
  blogTitle: string; // Feed의 title으로부터
}

export interface Image {
  link: string;
  url: string;
  title: string;
}

export interface PaginationLinks {
  self: string;
}
