import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomSelect = ({ placeholder, options, onSelect }) => {
  return (
    <Select>
      <SelectTrigger className="w-[121px] px-[18px] py-[22px] rounded-lg border-2 border-blue-900 text-blue-900 text-sm font-normal">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option} onSelect={onSelect}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
