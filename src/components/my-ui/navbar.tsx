import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { Button } from "../ui/button";
import {
  Bell,
  CircleHelp,
  MessageSquareText,
  Settings,
  Text,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MyDropdownMenu } from "./dropdown-menu";

function Navbar() {
  const navbarItems = [
    "Danh mục",
    "Bán & Xuất hàng",
    "Mua & Nhập hàng",
    "Kho và Sản xuất",
    "Kế toán",
    "Báo cáo & Thống kê",
    "Tiện ích",
  ];
  const icons = [Settings, Text, MessageSquareText, Bell, CircleHelp];

  return (
    <nav className="bg-[#003DA0] w-full px-8 py-4 flex items-center gap-8 text-background">
      <Image src={"/images/Logo.png"} alt="" width={80} height={30} />
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-4">
          {navbarItems.map((item, index) => (
            <Link key={index} href="#" className="text-xs">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <SearchInput className="h-6 placeholder:text-xs" />
          <div className="flex items-center gap-2">
            {icons.map((Icon, index) => (
              <Icon key={index} className="w-4 h-4" />
            ))}
          </div>
          <MyDropdownMenu></MyDropdownMenu>
        </div>
      </div>
    </nav>
  );
}
export { Navbar };
