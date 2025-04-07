import { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface MySelectProps {
  className?: string;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  icon?: ReactNode;
}

function MySelect({
  className,
  value,
  placeholder,
  onValueChange,
  options,
  icon,
}: MySelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
        {icon}
        <SelectValue placeholder={placeholder ?? "Chọn..."} />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { MySelect };
