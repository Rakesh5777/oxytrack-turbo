import Header from "@/layouts/header";
import { SideNav } from "@/layouts/sidenav";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import apis from "./services/api";
import { userDetailsAtom } from "./store/userDetails";

function App() {
  const setUserDetails = useSetRecoilState(userDetailsAtom);
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
    getUserDetails();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default App;
