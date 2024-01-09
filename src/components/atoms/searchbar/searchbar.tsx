"use client";
import Image from "next/image";
import React, { useRef } from "react";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("first");
  return (
    <article className="flex">
      <Image
        src={`/static_assests/icons/header/search.svg`}
        alt={`search_icon`}
        width={16}
        height={16}
      />
      <input
        type="text"
        ref={inputRef}
        placeholder={`Search features, tutorials, etc.`}
      />
    </article>
  );
};

export default SearchBar;
