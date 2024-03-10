import { Outlet } from "react-router-dom";
import Header from "@/layouts/header";
import { SideNav } from "@/layouts/sidenav";

function App() {
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
