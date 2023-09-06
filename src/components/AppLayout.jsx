import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="bg-magnolia py-10 h-screen items-center flex">
      <section className="container mx-auto flex p-5 bg-white rounded-lg min-h-[80vh]">
        <Sidebar />

        <Main />
      </section>
    </div>
  );
}

export default AppLayout;
