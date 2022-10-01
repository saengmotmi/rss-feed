import api from "libs/api";
import type { SearchSuggestions } from "types/rss/searchApi";

export const getSearchSuggestions = (query: string) => {
  return api.get<SearchSuggestions>(
    `/rss/search/suggestion?q=${encodeURIComponent(query)}`
  );
};
