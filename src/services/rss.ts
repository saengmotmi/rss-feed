import Axios from "axios";
import type { SearchSuggestions } from "types/rss/searchApi";

const client = Axios.create({
  baseURL: "/api",
});

export const getSearchSuggestions = (query: string) => {
  return client.get<SearchSuggestions>(
    `/rss/search/suggestion?q=${encodeURIComponent(query)}`
  );
};
