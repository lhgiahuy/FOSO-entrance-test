import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

function SearchInput({ className }: { className?: string }) {
  return (
    <div className="relative">
      <div className="absolute flex items-center h-full px-2">
        <Search className="w-3 h-3"></Search>
      </div>
      <Input
        type="text"
        placeholder="Tìm kiếm..."
        className={cn(
          className,
          "border-0 bg-background/20 pl-8 placeholder:text-background"
        )}
      />
    </div>
  );
}

export { SearchInput };
