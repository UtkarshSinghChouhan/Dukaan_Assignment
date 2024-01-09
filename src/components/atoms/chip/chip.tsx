import { IChip } from "@/lib/interfaces";

const Chip = ({ text, amnt, id }: IChip) => {
  return (
    <span className="inline-block rounded-[40px]">
      <p>
        {text} ({amnt})
      </p>
    </span>
  );
};

export default Chip;
