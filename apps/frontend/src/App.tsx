import { Outlet } from "react-router-dom";
import Header from "@/layouts/header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
