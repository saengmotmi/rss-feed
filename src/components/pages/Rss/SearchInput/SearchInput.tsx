import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Input } from "./SearchInput.style";
import { getSearchSuggestions } from "services/rss";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Image alt="search" src="/assets/search.svg" width={24} height={24} />
      <Input type="text" ref={inputRef} />
    </Container>
  );
};

export default SearchInput;
