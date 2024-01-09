import { SIDEBAR_DATA } from "@/lib/data";
import { ISidebar } from "@/lib/interfaces";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <section className="flex flex-col bg-[#1E2640] w-[224px] py-[16px] px-[10px] gap-[24px]">
      {/* User info */}
      <article className="flex justify-between mx-[8px]">
        <div className="flex gap-[12px]">
          <Image
            src={`/static_assests/images/Image.png`}
            alt={`profile_pic`}
            width={39}
            height={39}
          />

          <div className="flex flex-col">
            <p className="text-white capitalize">{`nishyam`}</p>
            <p className="text-white  underline">{`Visit store`}</p>
          </div>
        </div>

        <Image
          src={`/static_assests/icons/sidebar/Chevron Down.svg`}
          width={20}
          height={20}
          alt={``}
        />
      </article>

      {/* sidebar links */}
      <div className="flex-1 flex flex-col gap-[4px]">
        {SIDEBAR_DATA.map((obj: ISidebar, idx: number) => {
          const { img_url, name } = obj;
          return (
            <React.Fragment key={idx}>
              <div
                className={` ${name == "Payouts" ? "bg-[#FFFFFF]/[0.10]" : ""}
                flex px-[16px] py-[8px] gap-[12px] rounded-[4px] hover:bg-[#FFFFFF]/[0.10]`}
              >
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
      <article className="flex bg-[#353C53] gap-[10px] rounded-[4px] items-center px-[12px] py-[6px]">
        <div className="p-[4px] rounded-[4px] bg-[#FFFFFF]/[0.10]">
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
        </div>

        <div className="flex flex-col text-white">
          <p>{`Available credits`}</p>
          <p>{`222.10`}</p>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
