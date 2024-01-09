"use client";
import Image from "next/image";
import React, { useRef } from "react";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("first");
  return (
    <article className="flex items-center w-[30%] gap-[8px] bg-[#F2F2F2] rounded-[6px] px-[16px] py-[9px]">
      <Image
        src={`/static_assests/icons/header/search.svg`}
        alt={`search_icon`}
        width={16}
        height={16}
      />
      <input
        className="bg-transparent outline-none"
        type="text"
        ref={inputRef}
        placeholder={`Search features, tutorials, etc.`}
      />
    </article>
  );
};

export default SearchBar;
