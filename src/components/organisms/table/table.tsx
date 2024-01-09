"use client";

import { TABLE_DATA, TABLE_HEADERS } from "@/lib/data";
import { ITableData } from "@/lib/interfaces";
import Image from "next/image";
import React, { useRef } from "react";

const Table = () => {
  const tableRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div className="w-full flex bg-blue-500 justify-between">
        {/* Table Search */}
        <div className="flex">
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
            type="text"
            ref={tableRef}
            placeholder={`Order ID or transaction ID`}
          />
        </div>

        {/* Table Filters */}
        <div className="flex">
          {/* Table Sort*/}
          <div className="flex">
            {`Sort`}{" "}
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
          <div className="inline-block">
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
      <table>
        <tr>
          {TABLE_HEADERS.map((val: string, idx: number) => (
            <React.Fragment key={idx}>
              <th>{val}</th>
            </React.Fragment>
          ))}
        </tr>

        {TABLE_DATA.map((obj: ITableData, idx: number) => {
          const { orderId, status, transactionId, refundDate, orderAmnt } = obj;
          return (
            <React.Fragment key={idx}>
              <tr>
                <td>{orderId}</td>
                <td>{status}</td>
                <td>{transactionId}</td>
                <td>{refundDate}</td>
                <td>{orderAmnt}</td>
              </tr>
            </React.Fragment>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
