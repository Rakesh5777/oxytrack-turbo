import { sideNavAtom } from "@/store/applicationSettings";
import { ArchiveIcon, CardStackIcon, DashboardIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

const sideNavList = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/",
  },
  {
    name: "Customers",
    icon: CardStackIcon,
    path: "/customers",
  },
  {
    name: "Cylinders",
    icon: ArchiveIcon,
    path: "/cylinders",
  },
];

const NavItems = ({ smallScreen = false }) => {
  const setSideNavState = useSetRecoilState(sideNavAtom);
  useEffect(() => {
    if (!smallScreen) {
      setSideNavState({ isDrawerOpen: false, sideNavExpand: true });
    }
  }, []);

  return (
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
              onClick={() => smallScreen && setSideNavState({ isDrawerOpen: false, sideNavExpand: false })}
            >
              {<item.icon strokeWidth={2} />} {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SideNav = () => {
  const [sideNavState, setSideNavState] = useRecoilState(sideNavAtom);
  return (
    <div className="relative h-full z-10">
      <aside className={`hidden lg:block h-full transition-all overflow-auto ${sideNavState.sideNavExpand ? "w-60" : "w-0"}`}>
        <NavItems />
      </aside>
      {sideNavState.isDrawerOpen && (
        <div
          id="overlay"
          className={`lg:hidden absolute top-0 h-full w-screen bg-primary/10`}
          onClick={() => {
            setSideNavState((state) => ({ isDrawerOpen: false, sideNavExpand: false }));
          }}
        ></div>
      )}
      <aside className={`lg:hidden absolute top-0 h-full transition-all overflow-auto ${sideNavState.isDrawerOpen ? "w-60" : "w-0"} bg-background`}>
        <NavItems smallScreen={true} />
      </aside>
    </div>
  );
};
