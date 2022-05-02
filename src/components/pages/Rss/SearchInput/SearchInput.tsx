import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { Container, Input, Suggestion, Suggestions } from "./SearchInput.style";
import { getSearchSuggestions } from "services/rss";
import { SectionTitle } from "../Rss.style";
import { throttle } from "utils/throttle";

const SearchInput = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { data } = useQuery(
    ["searchSuggestions", searchKeyword],
    () => getSearchSuggestions(encodeURIComponent(searchKeyword)),
    {
      enabled: !!searchKeyword,
      onError: () => {},
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchKeyword)}`,
      "_blank"
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleInput = useCallback(
    throttle((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(e.target.value);
    }, 200),
    []
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const searchResult = data?.data.toplevel?.CompleteSuggestion;
  const keywords = Array.isArray(searchResult) ? searchResult : [searchResult];

  return (
    <div>
      <SectionTitle>구글 검색</SectionTitle>
      <Container onSubmit={handleSubmit}>
        <Image alt="search" src="/assets/search.svg" width={24} height={24} />
        <Input
          type="text"
          ref={inputRef}
          onChange={handleInput}
          placeholder="Google Search"
        />
        <Suggestions>
          {!!keywords[0] && keywords.length > 0 ? (
            keywords.map((k, idx) => (
              <Suggestion
                key={String(k?.suggestion._attributes.data ?? "" + idx)}
              >
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    k?.suggestion._attributes.data ?? ""
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {k?.suggestion._attributes.data}
                </a>
              </Suggestion>
            ))
          ) : (
            <Suggestion>검색어가 없습니다</Suggestion>
          )}
        </Suggestions>
      </Container>
    </div>
  );
};

export default SearchInput;
