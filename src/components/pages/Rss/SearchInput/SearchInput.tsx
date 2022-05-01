import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { Container, Input, Suggestion, Suggestions } from "./SearchInput.style";
import { getSearchSuggestions } from "services/rss";
import { SectionTitle } from "../Rss.style";

const SearchInput = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { data } = useQuery(
    ["searchSuggestions", searchKeyword],
    () => getSearchSuggestions(encodeURIComponent(searchKeyword)),
    {
      enabled: !!searchKeyword,
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchKeyword)}`,
      "_blank"
    );
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
          {data?.data.toplevel?.CompleteSuggestion?.map((k, idx) => (
            <Suggestion key={String(k.suggestion._attributes.data + idx)}>
              {k.suggestion._attributes.data}
            </Suggestion>
          )) ?? <Suggestion>검색어가 없습니다</Suggestion>}
        </Suggestions>
      </Container>
    </div>
  );
};

export default SearchInput;
