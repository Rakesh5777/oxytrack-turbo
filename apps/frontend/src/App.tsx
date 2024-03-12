import Header from "@/layouts/header";
import { SideNav } from "@/layouts/sidenav";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import apis from "./services/api";
import { userDetailsAtom } from "./store/userDetails";

function App() {
  const [userDetails, setUserDetails] = useRecoilState(userDetailsAtom);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetails = async () => {
      setIsLoading(true);
      try {
        const user = (await apis.master.masterUserDetails()).data;
        setUserDetails(user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        navigate("/signin");
      }
    };
    if (!userDetails?.username) {
      getUserDetails();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity ease-in-out flex flex-col h-screen`}>
      <Header className="h-14 flex-shrink-0" />
      <div className="flex-1 flex">
        <div>
          <SideNav />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
