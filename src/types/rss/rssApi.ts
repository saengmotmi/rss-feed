import { Output } from "rss-parser";

export type Feed = AdditionalItemProperties &
  Output<{
    [key: string]: any;
  }>;

export type Item = Feed["items"][number];

export interface AdditionalItemProperties {
  isoDate: string;
  "content:encoded"?: string;
  "content:encodedSnippet"?: string;
  author?: string;
  categories?: string[];
  blogTitle: string; // Feed의 title으로부터
  image: Image; // Feed의 title으로부터
  thumbnailImage: string;
}

export interface Image {
  link: string;
  url: string;
  title: string;
}

export interface PaginationLinks {
  self: string;
}
