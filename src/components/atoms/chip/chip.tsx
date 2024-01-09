import { IChip } from "@/lib/interfaces";

const Chip = ({ text, amnt, id, isSelected }: IChip) => {
  return (
    <span
      className={`${
        isSelected ? "bg-[#E6E6E6] text-[#808080]" : "bg-[#146EB4] text-[#FFF]"
      } px-[16px] py-[6px] inline-block rounded-[40px]`}
    >
      {text} ({amnt})
    </span>
  );
};

export default Chip;
