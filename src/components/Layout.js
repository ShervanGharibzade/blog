import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="w-96 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
