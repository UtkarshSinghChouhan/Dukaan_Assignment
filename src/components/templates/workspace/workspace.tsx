import Card from "@/components/atoms/card";
import Chip from "@/components/atoms/chip";
import Table from "@/components/organisms/table";
import { CARD_DATA, CHIP_DATA } from "@/lib/data";
import { ICardData } from "@/lib/interfaces";
import Image from "next/image";
import React from "react";

const Workspace = () => {
  return (
    <main className="bg-[#FAFAFA] flex-1 px-[32px] gap-[32px] py-[32px] overflow-y-scroll">
      <div className="flex flex-col gap-[32px]">
        {/* Overview section */}
        <div className="w-full flex flex-col gap-[24px]">
          <div className="flex w-full justify-between">
            <h3 className="text-[20px] text-[#1A181E] font-[500] leading-[28px]">{`Overview`}</h3>

            <div className="flex px-[14px] bg-white rounded-[4px] gap-[6px] border border-[#D9D9D9] py-[6px]">
              <p className="capitalize text-[16px] font-[400] text-[#4D4D4D] leading-[24px]">{`this month`}</p>
              <Image
                src={"/static_assests/icons/workspace/down_arrow.svg"}
                width={16}
                height={16}
                alt="Dropdown"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="flex gap-[20px] items-center w-[full]">
            {CARD_DATA.map((obj: ICardData, idx: number) => {
              return (
                <React.Fragment key={idx}>
                  <Card {...obj} id={idx} />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Table Intro Text */}
        <div className="w-full flex flex-col gap-[24px]">
          <p className="text-[20px] text-[#1A181E] font-[500] leading-[28px]">{`Transactions | This Month`}</p>
          <div className="flex gap-[12px]">
            {CHIP_DATA.map((obj, idx: number) => (
              <Chip {...obj} id={idx} />
            ))}
          </div>

          {/* Table */}
          <Table />
        </div>
      </div>
    </main>
  );
};

export default Workspace;
