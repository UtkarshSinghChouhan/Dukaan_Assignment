import SearchBar from "@/components/atoms/searchbar/searchbar";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="border-b border-[#D9D9D9] w-full px-[32px] gap-[16px] py-[12px] items-center flex justify-between bg-white">
      {/* Heading */}
      <div className="flex gap-[16px] flex-1">
        {/* Heading text*/}
        <h3 className="capitalize text-[20px] font-[500] leading-[28px]">{`payouts`}</h3>

        {/* Help text */}
        <article className="flex gap-[6px] items-center">
          <Image
            src={`/static_assests/icons/header/ques.svg`}
            alt={`ques`}
            width={14}
            height={14}
            unoptimized
            priority
            quality={90}
            loading="eager"
          />
          <p className="text-[12px] text-[#4D4D4D] font-[400] leading-[16px]">{`How it works`}</p>
        </article>
      </div>

      {/* SearchBar */}
      <SearchBar />

      {/* Notification */}
      <div className="flex flex-1 justify-end gap-[12px]">
        {[...new Array(2)].map((_, idx: number) => (
          <React.Fragment key={idx}>
            <span className=" rounded-full bg-[#E6E6E6] w-10 h-10 flex justify-center items-center">
              <Image
                src={`/static_assests/icons/header/${
                  idx === 0 ? "msg" : "down_arrow"
                }.svg`}
                alt={`img${idx}`}
                width={20}
                height={20}
                objectFit="contain"
              />
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Header;
