import { Outlet } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header";
import PageContainer from "./components/PageContainer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className=" flex-1 w-10/12 mx-auto">
        <Outlet />
      </main>
      <footer className="flex flex-row justify-between items-center w-full h-16 bg-gray-700 text-white p-2  ">
        hello
      </footer>
    </>
  );
};

export default Layout;
