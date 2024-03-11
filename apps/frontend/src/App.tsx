import Header from "@/layouts/header";
import { SideNav } from "@/layouts/sidenav";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import apis from "./services/api";
import { userDetailsAtom } from "./store/userDetails";
import React from "react";

function App() {
  const [userDetails, setUserDetails] = useRecoilState(userDetailsAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const user = (await apis.master.masterUserDetails()).data;
        setUserDetails(user);
      } catch (error) {
        navigate("/signin");
      }
    };
    if (!userDetails?.username) getUserDetails();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header className="h-14" />
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
