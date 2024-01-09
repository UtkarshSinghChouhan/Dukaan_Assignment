import { ICard } from "@/lib/interfaces";
import Image from "next/image";

const Card = ({ title, amnt, orders, id }: ICard) => {
  return (
    <article
      className={`flex flex-col flex-1  rounded-[8px] self-start shadow-md
      ${id === 0 ? "bg-[#146EB4]" : "bg-white"}`}
    >
      <div className="flex flex-col p-[20px] gap-[16px]">
        {/* Title */}
        <div
          className={`flex gap-[6px] text-[16px] font-[400] leading-[24px]
          ${id === 0 ? "text-[#FFF]" : "text-[#4D4D4D]"}`}
        >
          <p>{title}</p>
          <Image
            src={`${
              id == 0
                ? "/static_assests/icons/workspace/Help.svg"
                : "static_assests/icons/header/ques.svg"
            }`}
            alt={`help_tooltip`}
            width={16}
            height={16}
            unoptimized
            loading="eager"
            priority
            quality={90}
          />
        </div>

        {/* Amount */}
        <div className="w-full flex items-center justify-between">
          <p
            className={`text-[32px] font-[500] leding-[38px]
            ${id === 0 ? "text-[#FFF]" : "text-[#1A181E]"}`}
          >
            {" "}
            &#8377;{amnt}
          </p>
          {!!orders && (
            <div className="flex">
              <p
                className={`underline  ${
                  id === 0 ? "text-[#FFF]" : "text-[#146EB4]"
                }`}
              >
                {orders}orders
              </p>
              <Image
                src={`${
                  id == 0
                    ? "/static_assests/icons/workspace/Chevron Right.svg"
                    : " /static_assests/icons/workspace/right_arrow.svg"
                }`}
                alt={`more_info_icon`}
                width={24}
                height={24}
              />
            </div>
          )}
        </div>
      </div>

      {/* Extra text */}
      {id === 0 && (
        <div className="flex w-full px-[24px] py-[8px] rounded-[8px] justify-between bg-[#0E4F82] text-[#F2F2F2] text-[14px] font-[400] leading-[20px]">
          <p>{`Next payout date:`}</p>
          <p className="font-[500]">{`Today, 04:00PM`}</p>
        </div>
      )}
    </article>
  );
};

export default Card;
