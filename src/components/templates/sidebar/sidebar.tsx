import { SIDEBAR_DATA } from "@/lib/data";
import { ISidebar } from "@/lib/interfaces";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <section className="flex flex-col bg-[#1E2640]">
      {/* User info */}
      <article className="flex bg-red-300">
        <Image
          src={`/static_assests/images/Image.png`}
          alt={`profile_pic`}
          width={39}
          height={39}
        />

        <div className="flex flex-col">
          <p className="capitalize">{`nishyam`}</p>
          <p className="text-white underline">{`Visit store`}</p>
        </div>
      </article>

      {/* sidebar links */}
      <div className="flex-1 flex flex-col bg-green-400">
        {SIDEBAR_DATA.map((obj: ISidebar, idx: number) => {
          const { img_url, name } = obj;
          return (
            <React.Fragment key={idx}>
              <div className="flex">
                <Image
                  alt={`icon${idx}`}
                  src={img_url}
                  width={20}
                  height={20}
                  unoptimized
                  priority
                  quality={90}
                  loading="eager"
                />

                <p className="text-white">{name}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* user credit */}
      <article className="flex bg-pink-400">
        <Image
          alt={`wallet`}
          src={`/static_assests/icons/sidebar/wallet.svg`}
          width={24}
          height={24}
          unoptimized
          priority
          quality={90}
          loading="eager"
        />

        <div className="flex flex-col text-white">
          <p>{`Available credits`}</p>
          <p>{`222.10`}</p>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
