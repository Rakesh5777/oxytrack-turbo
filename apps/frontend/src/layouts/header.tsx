import { HamburgerMenuIcon, BellIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@ui/components/ui/avatar";
import React from "react";

const Header = () => {
  return (
    <header className="border-b flex px-4 items-center justify-between sticky top-0 h-14">
      <div id="title-section" className="relative z-20 flex gap-3 h-full items-center">
        <HamburgerMenuIcon className="h-5 w-6 cursor-pointer leading-none" />
        <div className="text-xl font-bold select-none">
          <em className="text-2xl font-semibold leading-none">O</em>xyTrack
        </div>
      </div>
      <div id="avatar-section" className="relative z-20 h-full flex gap-3 items-center select-none">
        <BellIcon className="h-5 w-6 cursor-pointer" />
        <Avatar>
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
