"use client";

import { TABLE_DATA, TABLE_HEADERS } from "@/lib/data";
import { ITableData } from "@/lib/interfaces";
import Image from "next/image";
import React, { useRef } from "react";

const Table = () => {
  const tableRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col bg-white p-[12px] rounded-[8px] gap-[12px] shadow-sm">
      <div className="w-full flex justify-between">
        {/* Table Search */}
        <div className="flex text-[#999] items-center gap-[8px] border border-[#D9D9D9] rounded-[4px] px-[16px] py-[9px]">
          <Image
            src={`/static_assests/icons/header/search.svg`}
            alt={`search`}
            width={14}
            height={14}
            unoptimized
            priority
            loading="eager"
            quality={90}
          />
          <input
            className="bg-transparent outline-none"
            type="text"
            ref={tableRef}
            placeholder={`Order ID or transaction ID`}
          />
        </div>

        {/* Table Filters */}
        <div className="flex gap-[16px]">
          {/* Table Sort*/}
          <div className="flex items-center px-[14px] bg-white rounded-[4px] gap-[6px] border border-[#D9D9D9] py-[6px]">
            <p className="capitalize text-[16px] font-[400] text-[#4D4D4D] leading-[24px]">{`Sort`}</p>
            <Image
              src={`/static_assests/icons/workspace/sort.svg`}
              alt={`sort_icon`}
              width={16}
              height={16}
              unoptimized
              priority
              loading="eager"
            />
          </div>
          <div className="flex px-[14px] bg-white rounded-[4px] gap-[6px] border border-[#D9D9D9] py-[6px]">
            <Image
              src={`/static_assests/icons/workspace/download.svg`}
              alt={`sort_icon`}
              width={16}
              height={16}
              unoptimized
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Actual Table */}
      <table className="text-[#4D4D4D] text-[14px] font-[400] leading-[20px]">
        <tr className="bg-[#F2F2F2] ">
          {TABLE_HEADERS.map((val: string, idx: number) => (
            <React.Fragment key={idx}>
              <th
                className={`rounded-[4px] px-[12px] py-[10px] ${
                  val == "Order amount" ? "text-right" : "text-left"
                } font-[500]`}
              >
                {val}
              </th>
            </React.Fragment>
          ))}
        </tr>

        {TABLE_DATA.map((obj: ITableData, idx: number) => {
          const { orderId, status, transactionId, refundDate, orderAmnt } = obj;
          return (
            <React.Fragment key={idx}>
              <tr className="border-b">
                <td className="px-[12px] py-[10px] text-left text-[#146EB4] font-[500]">
                  {orderId}
                </td>
                <td className="px-[12px] py-[10px] text-left text-[#1A181E]">
                  {status}
                </td>
                <td className="px-[12px] py-[10px] text-left">
                  {transactionId}
                </td>
                <td className="px-[12px] py-[10px] text-left">{refundDate}</td>
                <td className="px-[12px] py-[10px] text-right text-[#1A181E]">
                  {orderAmnt}
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
