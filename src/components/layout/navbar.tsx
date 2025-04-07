import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../my-ui/search-input";
import {
  Bell,
  CircleHelp,
  MessageSquareText,
  Settings,
  Text,
} from "lucide-react";
import { MyDropdownMenu } from "../my-ui/dropdown-menu";

function Navbar() {
  const navbarItems = [
    "Danh mục",
    "Bán & Xuất hàng",
    "Mua & Nhập hàng",
    "Kho và Sản xuất",
  ];
  const icons = [Settings, Text, MessageSquareText, Bell, CircleHelp];

  return (
    <nav className="bg-[#003DA0] w-full px-8 py-4 flex items-center gap-8 text-background">
      <Image src={"/images/Logo.png"} alt="" width={80} height={30} />
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-4">
          <Link href="/" className="text-sm">
            Trang chủ
          </Link>
          <Link href="/no-data" className="text-sm">
            Trang không data
          </Link>

          {navbarItems.map((item, index) => (
            <Link key={index} href="#" className="text-sm">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <SearchInput className="h-8 placeholder:text-xs" />
          <div className="flex items-center gap-4 hover:cursor-pointer">
            {icons.map((Icon, index) => (
              <Icon key={index} className="w-5 h-5" />
            ))}
          </div>
          <MyDropdownMenu></MyDropdownMenu>
        </div>
      </div>
    </nav>
  );
}
export { Navbar };
