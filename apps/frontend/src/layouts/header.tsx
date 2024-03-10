import { OxytrackTitle } from "@/components/oxytrackTitle";
import { sideNavAtom } from "@/state/applicationSettings";
import { userDetailsAtom } from "@/state/userDetails";
import { HamburgerMenuIcon, BellIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@ui/components/ui/avatar";
import { cn } from "@ui/lib/utils";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Header = ({ className = "" }: { className?: string }) => {
  const setSideNavState = useSetRecoilState(sideNavAtom);
  const userDetails = useRecoilValue(userDetailsAtom);

  const toggleSideDrawer = () => {
    setSideNavState((state) => ({ sideNavExpand: false, isDrawerOpen: !state.isDrawerOpen }));
  };

  const toggleSideNav = () => {
    setSideNavState((state) => ({ isDrawerOpen: false, sideNavExpand: !state.sideNavExpand }));
  };

  return (
    <header className={cn("border-b flex px-4 items-center justify-between sticky top-0", className)}>
      <div id="title-section" className="relative z-20 flex gap-3 h-full items-center">
        <HamburgerMenuIcon onClick={toggleSideNav} className="hidden lg:block h-5 w-6 cursor-pointer leading-none" />
        <HamburgerMenuIcon onClick={toggleSideDrawer} className="lg:hidden h-5 w-6 cursor-pointer leading-none" />
        <OxytrackTitle />
      </div>
      <div id="avatar-section" className="relative z-20 h-full flex gap-3 items-center select-none">
        <BellIcon className="h-5 w-6 cursor-pointer" />
        <Avatar>
          <AvatarFallback>{userDetails.username?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
