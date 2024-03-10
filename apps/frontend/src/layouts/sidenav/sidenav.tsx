import { sideNavAtom } from "@/state/applicationSettings";
import { ArchiveIcon, CardStackIcon, DashboardIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

const sideNavList = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/",
  },
  {
    name: "Customers",
    icon: CardStackIcon,
    path: "/users",
  },
  {
    name: "Inventory",
    icon: ArchiveIcon,
    path: "/inventory",
  },
];

const NavItems = () => (
  <div className="flex flex-col h-full border-r">
    <div className="my-6">
      <ul className="flex flex-col px-3 gap-4">
        {sideNavList.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center font-medium gap-2 cursor-pointer whitespace-nowrap rounded-md hover:bg-primary/5 h-9 px-4 py-2 leading-none ${
                isActive ? "bg-primary/5" : ""
              }`
            }
            key={item.name}
          >
            {<item.icon strokeWidth={2} />} {item.name}
          </NavLink>
        ))}
      </ul>
    </div>
  </div>
);

export const SideNav = () => {
  const [sideNavState, setSideNavState] = useRecoilState(sideNavAtom);
  useEffect(() => {
    console.log(sideNavState);
  });
  return (
    <div className="relative h-full">
      <aside className={`hidden lg:block h-full transition-all overflow-hidden ${sideNavState.sideNavExpand ? "w-52" : "w-0"}`}>
        <NavItems />
      </aside>
      {sideNavState.isDrawerOpen && (
        <div
          id="overlay"
          className={`lg:hidden absolute top-0 h-full w-screen bg-primary/5`}
          onClick={() => {
            setSideNavState((state) => ({ isDrawerOpen: false, sideNavExpand: false }));
          }}
        ></div>
      )}
      <aside className={`lg:hidden absolute top-0 h-full transition-all overflow-hidden ${sideNavState.isDrawerOpen ? "w-52" : "w-0"} bg-background`}>
        <NavItems />
      </aside>
    </div>
  );
};
