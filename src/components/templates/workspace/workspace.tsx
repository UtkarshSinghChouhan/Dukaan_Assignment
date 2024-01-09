import Card from "@/components/atoms/card";
import Chip from "@/components/atoms/chip";
import Table from "@/components/organisms/table";
import { CARD_DATA, CHIP_DATA } from "@/lib/data";
import { ICardData } from "@/lib/interfaces";
import React from "react";

const Workspace = () => {
  return (
    <section className="bg-teal-300 flex-1">
      {/* Overview section */}
      <div className="flex w-full justify-between">
        <h3>{`Overview`}</h3>
        <div>
          <p className="capitalize">{`this month`}</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex ">
        {CARD_DATA.map((obj: ICardData, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <Card {...obj} id={idx} />
            </React.Fragment>
          );
        })}
      </div>

      {/* Table Intro Text */}
      <div className="w-full flex flex-col">
        <p>{`Transactions | This Month`}</p>
        <div className="flex">
          {CHIP_DATA.map((obj, idx: number) => (
            <Chip {...obj} id={idx} />
          ))}
        </div>
      </div>

      {/* Table */}
      <Table />
    </section>
  );
};

export default Workspace;
