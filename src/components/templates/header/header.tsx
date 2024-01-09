import SearchBar from "@/components/atoms/searchbar/searchbar";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="w-full flex justify-between bg-pink-400">
      {/* Heading */}
      <div className="flex">
        {/* Heading text*/}
        <h3 className="capitalize">{`payouts`}</h3>

        {/* Help text */}
        <article className="flex">
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
          <p>{`How it works`}</p>
        </article>
      </div>

      {/* SearchBar */}
      <SearchBar />

      {/* Notification */}
      <div className="flex">
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
