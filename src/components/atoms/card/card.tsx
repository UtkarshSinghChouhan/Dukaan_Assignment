import { ICard } from "@/lib/interfaces";
import Image from "next/image";

const Card = ({ title, amnt, orders, id }: ICard) => {
  return (
    <article
      className={`flex flex-col  ${
        id === 0 ? "bg-[#146EB4] rounded-lg" : "bg-white"
      }`}
    >
      {/* Title */}
      <div className="flex">
        <p>{title}</p>
        <Image
          src={`/static_assests/icons/workspace/down_arrow.svg`}
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
      <div className="w-full flex justify-between">
        <p> &#8377;{amnt}</p>
        {!!orders && (
          <span className="flex">
            <p className="underline">{orders}orders</p>
            <Image
              src={`/static_assests/icons/workspace/right_arrow.svg`}
              alt={`more_info_icon`}
              width={24}
              height={24}
            />
          </span>
        )}
      </div>

      {/* Extra text */}
      {id === 0 && (
        <span className="flex w-full">
          <p>{`Next payout date:`}</p>
          <p>{`Today, 04:00PM`}</p>
        </span>
      )}
    </article>
  );
};

export default Card;
