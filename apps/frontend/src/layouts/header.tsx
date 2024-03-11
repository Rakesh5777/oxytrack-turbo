import { OxytrackTitle } from "@/components/oxytrackTitle";
import useLocalStorage from "@/hooks/localStorage";
import { sideNavAtom } from "@/store/applicationSettings";
import { userDetailsAtom } from "@/store/userDetails";
import { BellIcon, ExitIcon, GearIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@ui/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/components/ui/popover";
import { cn } from "@ui/lib/utils";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const sideNavList = [
  {
    name: "Settings",
    icon: GearIcon,
    path: "/settings",
  },
];

const Header = ({ className = "" }: { className?: string }) => {
  const setSideNavState = useSetRecoilState(sideNavAtom);
  const userDetails = useRecoilValue(userDetailsAtom);
  const [_token, setToken] = useLocalStorage("token", "");
  const [popover, setPopover] = React.useState(false);
  const navigate = useNavigate();

  const toggleSideDrawer = () => {
    setSideNavState((state) => ({ sideNavExpand: false, isDrawerOpen: !state.isDrawerOpen }));
  };

  const toggleSideNav = () => {
    setSideNavState((state) => ({ isDrawerOpen: false, sideNavExpand: !state.sideNavExpand }));
  };

  const handleSignOut = async () => {
    setToken("");
  };

  return (
    <header className={cn("border-b flex px-4 items-center justify-between sticky top-0", className)}>
      <div id="title-section" className="relative z-20 flex gap-3 h-full items-center">
        <HamburgerMenuIcon onClick={toggleSideNav} className="hidden lg:block h-5 w-6 cursor-pointer leading-none" />
        <HamburgerMenuIcon onClick={toggleSideDrawer} className="lg:hidden h-5 w-6 cursor-pointer leading-none" />
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          <OxytrackTitle />
        </span>
      </div>
      <div id="avatar-section" className="relative z-20 h-full flex gap-3 items-center select-none">
        <BellIcon className="h-5 w-6 cursor-pointer" />
        <Popover open={popover} onOpenChange={setPopover}>
          <PopoverTrigger>
            <Avatar>
              <AvatarFallback>{userDetails.username?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="mt-1">
            <Card className="border-none p-0">
              <CardHeader className="p-0">
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>{userDetails.username?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-1 flex-col gap-1">
                      <span className="truncate">{userDetails.username}</span>
                      <span className="text-sm text-gray-500 truncate">{userDetails.email}</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-6">
                {sideNavList.map((item) => (
                  <NavLink
                    to={item.path}
                    onClick={() => setPopover(false)}
                    className={({ isActive }) =>
                      `flex items-center font-medium gap-3 cursor-pointer whitespace-nowrap rounded-md hover:bg-primary/5 h-9 px-4 py-2 leading-none ${
                        isActive ? "bg-primary/5" : ""
                      }`
                    }
                    key={item.name}
                  >
                    {<item.icon className="h-12 w-5" />} {item.name}
                  </NavLink>
                ))}
                <div className="to-transparent bg-primary/10 h-[1px] my-4"></div>
                <a
                  onClick={handleSignOut}
                  type="submit"
                  className={`flex items-center font-medium gap-3 cursor-pointer whitespace-nowrap rounded-md hover:bg-primary/5 h-9 px-4 py-2 leading-none`}
                >
                  <ExitIcon className="h-12 w-5" /> Sign Out
                </a>
              </CardContent>
            </Card>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
