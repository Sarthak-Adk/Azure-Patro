import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <div className="flex flex-col lg:flex-row mt-2 px-[100px]">
        <Sidebar />
        <main className="flex-1  mt-2 px-[100px]">
        <Outlet/>
        </main>
      </div>
    </div>
  );
}
